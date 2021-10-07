window.posDataToXml = function(jsonStr){
	var json = jsonDecode(jsonStr);
	var data = {};
	if( json.diagram){
		data = json.diagram.elements;
	}else if(json.def){
		data = jsonDecode(json.def);
	}
	var create = function(){
		var nodes = Object.values(data.elements);
		makeGroupNode(nodes);
		nodes.sort(function(a,b){
			return a.props.zindex > b.props.zindex ? 1:(a.props.zindex === b.props.zindex ? 0:-1);
		});
		var page = data.page;
		if(page.backgroundColor == '0,0,0'){page.showGrid = 0;}
		var xml = '<mxfile><diagram name="Page-1">\
			<mxGraphModel dx="10" dy="10" math="0" \
			grid="'+parseInt(page.showGrid+0)+'" gridSize="'+parseInt(page.gridSize+0)+'" \
			guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" \
			pageWidth="'+page.width+'" pageHeight="'+page.height+'" background="'+paramColor(page.backgroundColor)+'" shadow="0">\
			<root><mxCell id="0"/><mxCell id="1" parent="0"/>';
		for(var i=0;i < nodes.length;i++){
			xml += createNode(nodes[i]);
		}
		xml += '</root></mxGraphModel></diagram></mxfile>';
		// console.log(132,xml,data.elements);
		return xml;
	};
	
	// 构造组合节点
	var makeGroupNode = function(nodes){
		var groups = {}; // 多个分组存储;
		for(var i=0;i < nodes.length;i++){
			var groupID = nodes[i].group;
			if(!groupID) continue;
			if(!groups[groupID]){groups[groupID] = [];};
			groups[groupID].push(nodes[i]);
		}
		for(var groupID in groups){
			var groupNode = {id:groupID,name:"group",props:{x:-1,y:-1,w:-1,h:-1,zindex:-1}};
			var pose = groupNode.props; // x,y,zindex取所有子节点最小; width,height取到最小x,y最大处;
			for(var i=0;i < groups[groupID].length;i++){
				var poseNow = groups[groupID][i].props;
				if(poseNow.x < pose.x || pose.x===-1){pose.x = parseInt(poseNow.x);}
				if(poseNow.y < pose.y || pose.y===-1){pose.y = parseInt(poseNow.y);}
				if(poseNow.zindex < pose.zindex || pose.zindex===-1){pose.zindex = poseNow.zindex;}
			}
			for(var i=0;i < groups[groupID].length;i++){
				var poseNow 	= groups[groupID][i].props;
				var nowWidth 	= parseInt(poseNow.x - pose.x + poseNow.w);
				var nowHeight 	= parseInt(poseNow.y - pose.y + poseNow.h);
				if(nowWidth  > pose.w || pose.width  ===-1){pose.w = nowWidth;}
				if(nowHeight > pose.h || pose.height ===-1){pose.h = nowHeight;}
			}
			nodes.push(groupNode);
			data.elements[groupID] = groupNode;
			// console.log(101,groupNode,groups[groupID]);
		}
	}		
	var paramMake = function(obj,type){
		if(typeof(obj) == 'string') return obj;
		var result = '';
		for (var key in obj){
			if(obj[key] === null){
				if(type == 'attr'){ result += key+' ';}
				if(type == 'style'){result += key+';';}
				continue;
			}
			if(type == 'attr'){ result += key+'="'+obj[key]+'" ';}
			if(type == 'style'){result += key+'='+obj[key]+';';}
		}
		return result;
	}
	var paramMakeStyle = function(obj){return paramMake(obj,'style');}
	var paramMakeAttr  = function(obj){return paramMake(obj,'attr');}
	var paramColor     = function(color){
		if(color == 'transparent') return '';
		if(color.indexOf(',') == -1) return color;
		var arr = color.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
		var strHex = '#';
		for(var i=0; i<arr.length; i++){
			var hex = Number(arr[i]).toString(16);
			if( hex === "0" ){hex += hex;}
			strHex += hex;
		}
		return strHex;
	}
	var createNodePose = function(node){
		var geoAttr = {
			x:node.props.x,y:node.props.y,
			width:node.props.w,height:node.props.h,as:"geometry"
		};
		if(node.props.relative){
			geoAttr.relative = 1;
			var offsetX = node.props.offsetX || 0;
			return '<mxGeometry '+paramMakeAttr(geoAttr)+'><mxPoint x="'+offsetX+'" as="offset" /></mxGeometry>';
		}
		
		var theNode 	= node;
		var parentID 	= theNode.container || theNode.group || false;
		var linePoints	= node.points || [];
		while(parentID && data.elements[parentID]){
			theNode = data.elements[parentID];
			parentID = theNode.container || theNode.group || false;
			if(!theNode) break;
			geoAttr.x = geoAttr.x - theNode.props.x;
			geoAttr.y = geoAttr.y - theNode.props.y;
			
			// 连线点,相对坐标处理;
			for(var i=0; i< linePoints.length; i++){
				linePoints[i].x = linePoints[i].x - theNode.props.x;
				linePoints[i].y = linePoints[i].y - theNode.props.y;
			}
		}

		if(node.from){
			var pointsXml = '';
			for(var i=0; i< linePoints.length; i++){
				pointsXml += '<mxPoint x="'+linePoints[i].x+'" y="'+linePoints[i].y+'" />'
			}
			return '<mxGeometry relative="1" as="geometry"><Array as="points">'+pointsXml+'</Array></mxGeometry>';
		}
		return '<mxGeometry '+paramMakeAttr(geoAttr)+'/>';
	}
	var mapShape = function(node,attr,style){
		if(mxCellRenderer.defaultShapes[node.name]){style.shape = node.name;} // 形状对应处理;	
		//name=key时; 值为对象则style追加内容; 若为数组则[0]为style,[1]为attr;
		var shapeMap = window.processShapeMap;
		var extendKey = function(key){
			var match = shapeMap[key] || shapeMap[key.toLowerCase()];
			// if(!match) return;
			if(!match){match = {fillColor:'none'};}
			
			var styleAdd = match.length ? match[0]:match;
			var attrAdd  = match.length ? match[1]:{};
			if(styleAdd._width){ node.props.w = styleAdd._width;}
			if(styleAdd._height){node.props.h = styleAdd._height;}
			$.extend(true,style,styleAdd);
			$.extend(true,attr,attrAdd);
		}
		extendKey(node.name);
		extendKey(node.category+'_'+node.name);
		
		if(node.category == 'network'){
			$.extend(true,style,{
				verticalAlign:'top',verticalLabelPosition:'bottom',
				outlineConnect:0,fillColor:"CCCCCC",strokeColor:'#6881B3'
			});
		}
		// if(style.strokeWidth === undefined){style.strokeWidth = 1.5;}
		if(style.whiteSpace  === undefined){style.whiteSpace = 'wrap';}
	}
	
	var poseValue = function(pose,key,node){
		var value = parseInt(pose[key]);
		return isNaN(value) ? 0:value;
		var w = node.props.w;var h = node.props.h;
		value = eval(pose[key]+"");//计算值;			
		return value;
	};
	
	/**
	 * 构造连线起点及终点所在元素相对位置; 相对元素的比例,取值范围(0,1)
	 * 说明: exitX:起始元素x; exitY: 起始元素y; entryX:到达元素x,entryY:到达元素y;
	 */
	var makeLinkPosition = function(linkPose,keyX,keyY,style){
		if(!data.elements[linkPose.id] || !data.elements[linkPose.id].props) return;
		var targetPose = data.elements[linkPose.id].props;
		var x = (linkPose.x - targetPose.x ) / targetPose.w;
		var y = (linkPose.y - targetPose.y ) / targetPose.h;
		x = (x <= 0) ? 0: (x >=1 ? 1 :x.toFixed(2));
		y = (y <= 0) ? 0: (y >=1 ? 1 :y.toFixed(2));
		style[keyX] = x;
		style[keyY] = y;
	}
	var makeLinkNode = function(node,attr,style){
		if(node.name != 'linker') return;
		attr.source = node.from.id;
		attr.target = node.to.id;
		attr.value  = node.text || '';
		attr.edge = 1;
		style.jettySize = 'auto';
		
		if(node.linkerType == 'normal'){}
		if(node.linkerType == 'curve'){style.curved = '1';}
		if(node.linkerType == 'broken'){style.edgeStyle = 'orthogonalEdgeStyle';}
		makeLinkPosition(node.from,'exitX','exitY',style);
		makeLinkPosition(node.to,'entryX','entryY',style);
		
		//箭头样式: endArrowStyle,beginArrowStyle   dashedDiamond-菱形;dashedArrow-空三角形;
		var arrowStyleMap = {
			none:'none',
			solidArrow:'block',
			dashedArrow:['block'],//空心
			normal:'open',
			solidDiamond:['diamond'],//空心
			dashedDiamond:'diamond',
			solidCircle:'circle',
			dashedCircle:['oval'],	//空心;
			cross:'dash',
			asynch1:'openAsync',
			asynch2:'openAsync',
		};
		if(node.lineStyle && node.lineStyle.beginArrowStyle){
			style.startFill  = '1';
			style.startArrow = arrowStyleMap[node.lineStyle.beginArrowStyle] || '';
			if(style.startArrow.length == 1){
				style.startArrow = style.startArrow[0];
				style.startFill = '0'
			}
		}
		if(node.lineStyle && node.lineStyle.endArrowStyle){
			style.endFill  = '1';
			style.endArrow = arrowStyleMap[node.lineStyle.endArrowStyle] || 'block';
			if(style.endArrow.length == 1){
				style.endArrow = style.endArrow[0];
				style.endFill  = '0'
			}
		}
	}
	
	var createNode = function(node){
		//note:备注; linker:连接线;
		var attr  = {id:node.id||"",parent:node.container || node.group || 1};
		var style = {html:1,whiteSpace:'wrap',rounded:0};
		if(node.textBlock && node.textBlock[0]){//文字;
			var block = node.textBlock[0];
			var text  = block.text || '';
			attr.value = htmlEncode(text.replace(/[\r\n]/g,'<br/>'));
			attr.vertex = 1;
			// style.spacingLeft = poseValue(block.position,'x',node);
			// style.spacingTop  = poseValue(block.position,'y',node);
		}
		makeLinkNode(node,attr,style);
		mapShape(node,attr,style);
		//dashed=1;strokeWidth=1;fontColor=#4DD0E1;fillColor=#E6F7FF;strokeColor=#40A9FF;
		if(node.lineStyle){
			if(node.lineStyle.lineColor){style.strokeColor = paramColor(node.lineStyle.lineColor);}
			if(node.lineStyle.lineStyle && !style.strokeColor){style.strokeColor = '#444444';}
			if(node.lineStyle.lineStyle == 'dot'){style.dotted = 1;}
			if(node.lineStyle.lineStyle == 'dashed'){style.dashed = 1;}
			if(node.lineStyle.lineStyle == 'dashdot'){style.dotted = 1;}
			
			// 框;
			if(style.strokeWidth && node.lineStyle.lineWidth===0 && node.category == 'aws_groups'){
				node.lineStyle.lineWidth = style.strokeWidth;
			}
			if(node.lineStyle.lineWidth !== undefined){style.strokeWidth = node.lineStyle.lineWidth;}
			if(style.strokeWidth == 0){style.strokeColor = 'none';}
		}

		if(node.fontStyle){
			if(node.fontStyle.size){style.fontSize = node.fontStyle.size;}
			if(node.fontStyle.color){style.fontColor = paramColor(node.fontStyle.color);}
			if(node.fontStyle.textAlign){style.align = node.fontStyle.textAlign;}
			if(node.fontStyle.vAlign){style.verticalAlign = node.fontStyle.vAlign;}
			if(node.fontStyle.fontFamily){style.fontFamily = node.fontStyle.fontFamily;}
			
			//blod:1; italic:2; underline:4;
			style.fontStyle = 0;
			if(node.fontStyle.bold){style.fontStyle += 1;}
			if(node.fontStyle.italic){style.fontStyle += 2;}
			if(node.fontStyle.underline){style.fontStyle += 4;}
		}
		
		// 左对齐情况边距自适应;
		if(style.align == 'left'){style.spacingLeft=10;style.spacingRight=10;}
		if(node.fillStyle){
			if(node.fillStyle.color && !style.fillColor){
				style.fillColor = paramColor(node.fillStyle.color);
			}
			if(node.fillStyle.type =='none'){style.fillColor = 'none';}
			if(node.fillStyle.type =='gradient'){
				style.fillColor = paramColor(node.fillStyle.beginColor);
				style.gradientColor = paramColor(node.fillStyle.endColor);
			}
			
			// 填充颜色半透明处理;
			if(node.fillStyle.alpha !== undefined){
				var alpha = parseInt(node.fillStyle.alpha * 255).toString(16);
				if(style.fillColor){style.fillColor += alpha;}
				if(style.gradientColor){style.gradientColor += alpha;}
			}
		}
		if(node.category == "venn"){
			style.ellipse = null;
		}
		if(node.shapeStyle){
			var alpha = node.shapeStyle.alpha;
			if(typeof(alpha) != 'undefined'){style.opacity = parseInt(alpha * 100);}
		}
		// 旋转角度
		if(node.props.angle){
			style.rotation = (node.props.angle * 180) / Math.PI;
		}
		
		// processon 网络搜索图片,及平台图片;
		var setImage = function(image){
			style.shape = 'image';style.strokeColor = 'none';attr.vertex = 1;
			if(image.substr(0,4) == 'http'){
				style.image = (image.split('?'))[0];
			}else{
				style.image = 'https://www.processon.com/file/id/'+node.fillStyle.fileId+'/diagram_user_image';
			}
			// console.error(3003,style.image);
		};
		if(node.category == 'search' && node.fillStyle.fileId){setImage(node.fillStyle.fileId);}
		if(node.name == 'standardImage' && node.fillStyle.fileId){setImage(node.fillStyle.fileId);}
		processShapeParse(node,attr,style,createNodeHtml);
		return createNodeHtml(node,style,attr);
	};
	var createNodeHtml = function(node,style,attr){
		if( !data.elements[attr.parent] ){attr.parent = '1';}
		var xmlPose = createNodePose(node);
		var nodeStyle = ' style="'+paramMakeStyle(style)+'"';
		var xmlNode   = '<mxCell '+paramMakeAttr(attr)+nodeStyle+'>'+xmlPose+'</mxCell>';
		if(node.appenNode) {xmlNode += node.appenNode;}
		if(node.link){ //链接;
			var linkAttr = paramMakeAttr({
				label:attr.value,link:node.link,
				id:attr.id,linkTarget:'_blank'
			});
			delete attr.value;delete attr.id;
			xmlNode = '<UserObject '+linkAttr+'><mxCell '+paramMakeAttr(attr)+nodeStyle+'>'+xmlPose+'</mxCell></UserObject>';
		}
		// console.log(201,[attr.value,node.category,node.name,node.id,node,attr,style,[xmlNode]]);
		return xmlNode;
	}
	
	return create();
};