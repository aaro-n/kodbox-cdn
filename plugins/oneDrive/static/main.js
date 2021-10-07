kodReady.push(function(){
	var staticPath = "{{pluginHost}}static/";
	// var version = '?v={{package.version}}';

	var onedrivePkg = {};
	Events.bind('storage.init.load', function(self){
		requireAsync(staticPath+'package.js', function(package){
			onedrivePkg = package;
		});
		// 添加菜单
		var key = 'onedrive';
		if(_.isUndefined(self.typeList[key])) {
			self.typeList[key] = 'OneDrive';
			self.iconList[key] = '<i class="path-ico name-kod-onedrive"><img src="{{pluginHost}}static/images/icon.png"></i>';
		}
	});
	// 存储form赋值
	Events.bind('storage.config.form.load', function(type, formData){
		if(type != 'onedrive') return;
		_.extend(formData, $.objClone(onedrivePkg));
	});
	Events.bind('storage.config.view.load', function(self, type, action){
		if(type != 'onedrive') return;
		// 开启授权
		self.formMaker.$("[name='auth']").click(function(){
			var canOpen = true;
			if(action == 'edit') {
				canOpen = self.$(".store-type-box input[name=editForce]:checked").val() ? true : false;
			}
			if(!canOpen) return false;
			if($(this).is(":checked")) {
				$.ajax({
					url: '{{pluginApi}}clientId',
					dataType:'json',
					success:function(result){
						var client_id = result.data;
						self.formMaker.setValue('client_id', client_id);
						doAppAuth(client_id);
					}
				});
			}
		});
	});
	Events.bind('storage.list.view.load', function(self){
		var storeList = self.parent.storeListAll || {};
		_.each(storeList, function(item){
			if(_.toLower(item.driver) == 'onedrive') {
				self.$(".app-list [data-id='"+item.id+"'] .dropdown-menu li").eq(0).hide();
			}
		});
	});

	// 去授权
	var doAppAuth = function(client_id){
		var url = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize';
		var redirect_uri = _.trimEnd(_.get(G, 'system.settings.kodApiServer'), '?') + 'index.php/plugin/platform';
        var param = [
            'client_id=' + client_id,
			'response_type=code',
			'redirect_uri=' + urlEncode(redirect_uri),
			'state=' + jsonEncode({link: staticPath + 'auth.html', type: 'onedrive'}),
			'scope=' + urlEncode('files.readwrite.all offline_access')
        ];
        url += '?' + _.join(param, '&');
		return window.open(url);
	}

	if($.hasKey('plugin.oneDrive.style')) return;
	requireAsync("{{pluginHost}}static/main.css");
});