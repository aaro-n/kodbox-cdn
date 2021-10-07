<?php

/**
 * OneDrive存储对接
 * https://docs.microsoft.com/zh-cn/onedrive/developer/rest-api/getting-started/graph-oauth?view=odsp-graph-online
 * https://github.com/dotnet/AspNetCore.Docs/issues/19795
 * https://docs.microsoft.com/zh-cn/azure/active-directory/develop/supported-accounts-validation
 */
class oneDrivePlugin extends PluginBase{
	function __construct(){
		parent::__construct();
	}
	
	public function regist(){
		$this->hookRegist(array(
			'globalRequest'					=> 'oneDrivePlugin.autoRun',
			'user.commonJs.insert'			=> 'oneDrivePlugin.echoJs',
			'admin.plugin.setconfig.before'	=> 'oneDrivePlugin.appSetBefore',
			'admin.storage.add.before'		=> 'oneDrivePlugin.storeBefore',
			'admin.storage.edit.before'		=> 'oneDrivePlugin.storeBefore',
			'onedrive.refresh.token'		=> 'oneDrivePlugin.refreshToken',
		));
	}
	public function autoRun(){
		include_once($this->pluginPath.'lib/PathDriverOneDrive.class.php');
	}
	public function echoJs(){
		$this->echoFile('static/main.js');
	}
	// 切换插件状态
	public function onChangeStatus($status){
		if(!_get($GLOBALS,'isRoot')) show_json(LNG('explorer.noPermissionAction'),false);
		if($status != '1') return;

		// 每次启用时，重新获取client_id
		$data = array(
			'state' => json_encode(array(
				'type' => 'onedrive',
				'client_id'	=> '',
			))
		);
		$url = $this->callbackUri();
		$res = url_request($url, 'POST', $data);
		$data = json_decode($res['data'], true);

		$client_id = $data['code'] ? $data['data'] : '';
		$this->setConfig(array('client_id' => $client_id));
	}
	public function appSetBefore(){
		if($this->in['app'] != $this->pluginName) return;
		if(!_get($GLOBALS,'isRoot')) show_json(LNG('explorer.noPermissionAction'),false);
	}

	// 获取网盘应用client_id（AppKey）
	public function clientId(){
		$config = $this->getConfig();
		$client_id = isset($config['client_id']) ? $config['client_id'] : '';
		show_json($client_id);
	}

	/**
	 * 存储新增/编辑前，数据处理
	 * @return void
	 */
	public function storeBefore(){
		$driver = Input::get('driver');
		if(!$driver || strtolower($driver) != 'onedrive') return;

		$data = Input::getArray(array(
			"id"		=> array("default"=>null),
			"name" 		=> array("check"=>"require"),
			"sizeMax" 	=> array("check"=>"require","default"=>0),
			"driver" 	=> array("check"=>"require"),
			"default" 	=> array("check"=>"require","default"=>0),
			"system" 	=> array("check"=>"bool","default"=>0),
			"editForce"	=> array("default"=>0),
			"config" 	=> array("check"=>"require"),
		));
		$config = json_decode($data['config'], true);
		if($config['auth'] != '1') show_json('未开启账号授权！', false);
		$valids = array('access_token', 'refresh_token', 'token_expire_time');
		foreach($valids as $name) {
			if(empty($config[$name])) show_json('授权信息有误，请尝试重新授权', false);
		}
		$config['name'] = $data['name'];	// 存储中触发刷新token时，name作为查找条件

		// 新增
		if(!$data['id']) return $this->addStore($data, $config);
		// 编辑
		$this->in['editForce'] = 0;	// 不再检查连接
		$this->in['config'] = json_encode($config);
	}

	// 新增存储
	private function addStore($data, $config){
		$list = Model('Storage')->listData();
		$list = array_to_keyvalue($list, 'name');
		if (isset($list[$data['name']])) {
			show_json('名称已存在', false);
		}
		$data['config'] = json_encode($config);
		$res = Model('Storage')->insert($data);
		$msg = $res ? LNG('explorer.success') : LNG('explorer.error');
		show_json($msg,!!$res);
	}

	/**
	 * 刷新accessToken
	 * @param [type] $name
	 * @return void
	 */
	public function refreshToken($name){
		$model = Model('Storage');
		$store = $model->findByName($name);
		if(!$store) return;
		$config = $model->getConfig($store['id']);

		// api请求刷新access_token
		$data = array(
			'state' => json_encode(array(
				'type' => 'onedrive',
				'refresh_token' => $config['refresh_token'],
			))
		);
		$url = $this->callbackUri();
		$res = url_request($url, 'POST', $data);

		$data = json_decode($res['data'], true);
		if(!$data['code'] || !$data['data']) return;	// 刷新失败
		$token = json_decode($data['data'], true);
		if(!$token) return;

		$valids = array('access_token', 'refresh_token', 'token_expire_time');
		foreach($valids as $name) {
			if(empty($token[$name])) return;
			$config[$name] = $token[$name];
		}
		// 更新存储
		$store['config'] = json_encode($config);
		$model->update($store['id'], $store);

		return $token;
	}

	// 回调地址，为pathInfo模式
	private function callbackUri(){
		return rtrim($GLOBALS['config']['settings']['kodApiServer'], '?') . 'index.php/plugin/platform';
	}
}