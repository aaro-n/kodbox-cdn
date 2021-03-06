

## 1.07版本
- processon兼容: 支持parentId不存在时默认绘制; 旋转角度调整;
- 搜索网络图标: 加载更多操作优化;

## 1.0版本;
- drawio优化增强: 
	- 样式优化:载入loading,工具栏样式,菜单栏样式,弹出层,按钮样式,输入框样式等; 
	- 组件优化:颜色选择组件优化;颜色处理;[hover 更新]
	- 菜单图标支持: 工具栏下拉菜单icon,右键菜单icon等加入图标,便于记忆和理解;
	- 界面配置:紧凑模式,语言自动更随处理; 默认插件处理;去除外部存储导入导出,快捷键说明优化
	- 多语言优化: 部分翻译词调整, 多语言跟随kod自适应;
	- 图形渲染优化: 圆角处理,角度默认值处理(absoluteArcSize:1,arcSize:10)
	- 常用图标优化: 样式优化(花括号,花括号组...);
	- 渲染的默认值: 线条粗细:1.5,线条颜色;文本颜色,文本字体大小,文本字体样式,文本全局间距...
	- 文字字体优化: 字体初始值处理; 字体选择新增中文相关字体;
	- 图标搜索增强: 中文搜索处理; 
	- 网络图标搜索: 支持网络搜索图标(支持alifont,iconsapi接口)
	- 图标拖拽增强: 拖拽图标到编辑器,拖拽时显示具体图标样式;(svg及搜索结果拖拽支持)
- 插件集成
	- 文件打开处理;(文件选择;url,path;分享页面只读模式);
	- 文件打开保存: 
		- drawio文件编辑;界面保存,ctrl+s保存; 打开所在文件夹
		- 打开文件: 当前文件为空时,支持打开文件
		- 新建文件: 另存为处理;(默认路径,保存后处理);
		- 打开非drawio文件: 另存为处理;(同目录)
	- 文件缩略图: 编辑时生成, 文件列表展示;
	- 文件菜单-打开文件: 从kod中选择drawio文件进行打开; 如果已经有打开文件则新窗口打开;
	- 新建文件集成: 加入新建drawio流程图; (新建文件类型快速整合sdk处理; 新建完成回调处理通知)
	- 静态资源cdn处理配置; 图标网络搜索(阿里icon,iconsapi(本地/中转))
- 文件打开转换: vsd,vsdx; (保存时另存为);
- processOn 格式预览支持(pos)
	- 文字处理: 大小,字体,颜色,背景色,水平对齐方式,垂直对齐,文字格式...;边距;链接处理
	- 图形绘制: 矩形,菱形,圆形,椭圆;三角形,梯形,扇形,五边形,六边形,八边形,五角星...;圆角处理;
	- 连线处理: 连线样式,粗细,起始点,终止点位置处理;起始终止箭头类型;连线自动位置处理;
	- 层级处理: 父级处理;组合时坐标处理;上下层级处理;(组合时创建父元素,相对坐标重置)
	- 样式调整: 矩形文字左对齐时默认左右边距; 各类不一致情况图形处理: internalStorage:dx,dy;...
	- 图片处理: 搜索的图片及平台图片显示处理;
	- 其他svg图标兼容;(阿里云icon;azure;图标导入工具处理)

# 开发
- 文档: https://jgraph.github.io/mxgraph/docs/js-api/files/index-txt.html
- 插件-公式: https://desk.draw.io/support/solutions/articles/16000032875;