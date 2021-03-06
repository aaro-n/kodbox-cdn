(function(){
	window.drawLang = {support:['zh','en'],current:'en'};
	drawLang.en = {
		'#menu_bar .menu:eq(1) .menu_title':"File",
		'#menu_bar .menu:eq(2) .menu_title':"Edit",
		'#menu_bar .menu:eq(3) .menu_title':"Object",
		'#menu_bar .menu:eq(4) .menu_title':"View",
	
		"#align_tools h4": "Align to canvas",
		"#canvas_panel h4": "Canvas",
		"#circle_panel h4": "Circle",
		"#ellipse_panel h4": "Ellipse",
		"#g_panel h4": "Group",
		"#image_panel h4": "Image",
		"#line_panel h4": "Line",
		"#multiselected_panel h4": "Multiple Elements",
		"#path_node_panel h4": "Edit Path",
		"#path_panel h4": "Path",
		"#rect_panel h4": "Rectangle",
		"#stroke_panel h4": "Stroke",
		"#svg_panel h4": "SVG",
		"#text_panel h4": "Text",
		"#textpath-panel h4": "Text Path",
		"#use_panel h4": "Use",
		
		"#tool_download":"Download",
		"#modal_shortcuts": "Keyboard Shortcuts...",
		"#tool_clear": "New Document",
		"#tool_open": "Open SVG...",
		"#tool_import": "Place Image...",
		"#tool_save": "Save Image...",
		"#tool_export": "Export as PNG",
		"#tool_undo": "Undo",
		"#tool_redo": "Redo",
		"#tool_cut": "Cut",
		"#tool_copy": "Copy",
		"#tool_paste": "Paste",
		"#tool_clone": "Duplicate",
		"#tool_delete": "Delete",
		"#tool_move_top": "Bring to Front",
		"#tool_move_up": "Bring Forward",
		"#tool_move_down": "Send Backward",
		"#tool_move_bottom": "Send to Back",
		"#tool_group": "Group Elements",
		"#tool_ungroup": "Ungroup Elements",
		"#tool_topath": "Convert to Path",
		"#tool_reorient": "Reorient path",
		"#tool_rulers": "View Rulers",
		"#tool_wireframe": "View Wireframe",
		"#tool_source": "Source...",
		"[title='Switch to lightmode']": "Switch to lightmode",
		"#selectedPredefined": "Custom",
		"#fitToContent": "Fit to Content",
		"#resolution_label": "Custom",
		"#tool_release_text_on_path": "Remove path",
		"#font_sizeLabel": "Font Size",
		"#tool_unlink_use": "Break use ref",
		"[title='Ungroup Elements']": "Ungroup Elements",
		"#straight_segments": "Straight",
		"#curve_segments": "Curve",
		"#seg_type_label": "Straight",
		"[title='Adds a node']": "Adds a node",
		"[title='Delete Node']": "Delete Node",
		"[title='Open/close sub-path']": "Open/close sub-path",
		"#group_opacityLabel": "Opacity",
		"[title='Align Left']": "Align Left",
		"[title='Align Center']": "Align Center",
		"[title='Align Right']": "Align Right",
		"[title='Align Top']": "Align Top",
		"[title='Align Middle']": "Align Middle",
		"[title='Align Bottom']": "Align Bottom",
		"#selected_objects": "Align to objects",
		"#page": "Align to page",
		"#button_group": "Group Elements",
		"[title='Place text on path']": "Place text on path",
		"[title='Select Tool [V]']": "Select Tool [V]",
		"[title='Pencil Tool [P]']": "Pencil Tool [P]",
		"[title='Line Tool [L]']": "Line Tool [L]",
		"[title='Square/Rect Tool [R]']": "Square/Rect Tool [R]",
		"[title='Ellipse/Circle Tool [C]']": "Ellipse/Circle Tool [C]",
		"[title='Path Tool [P]']": "Path Tool [P]",
		"[title='Text Tool [T]']": "Text Tool [T]",
		"[title='Zoom Tool [Z]']": "Zoom Tool [Z]",
		"[title='Eyedropper Tool [E]']": "Eyedropper Tool [E]",
		"[title='Switch stroke and fill colors [X]']": "Switch stroke and fill colors [X]",
		"[title='Change fill color']": "Change fill color",
		"[title='Change stroke color']": "Change stroke color",
		"[title='Change zoom level']": "Change zoom level",
		"[href='#cut']": "Cut",
		"[href='#copy']": "Copy",
		"[href='#paste']": "Paste",
		"[href='#delete']": "Delete",
		"[href='#group']": "Group",
		"[href='#ungroup']": "Ungroup",
		"[href='#move_front']": "Bring to Front",
		"[href='#move_up']": "Bring Forward",
		"[href='#move_down']": "Send Backward",
		"[href='#move_back']": "Send to Back",
		"[title='star_points_5']": "star_points_5",
		"[title='donut']": "donut",
		"[title='triangle']": "triangle",
		"[title='right_triangle']": "right_triangle",
		"[title='diamond']": "diamond",
		"[title='pentagon']": "pentagon",
		"[title='hexagon']": "hexagon",
		"[title='septagon1']": "septagon1",
		"[title='heptagon']": "heptagon",
		"[title='decagon']": "decagon",
		"[title='dodecagon']": "dodecagon",
		"[title='trapezoid']": "trapezoid",
		"[title='heart']": "heart",
		"[title='cylinder']": "cylinder",
		"[title='plaque']": "plaque",
		"[title='page']": "page",
		"[title='cross']": "cross",
		"[title='divide']": "divide",
		"[title='minus']": "minus",
		"[title='times']": "times",
		"#tool_source_cancel": "Cancel",
		"#tool_source_save": "Apply Changes",
		
		"#shape_cats [data-cat=basic]": "Basic",
		"#shape_cats [data-cat=object]": "Objects",
		"#shape_cats [data-cat=symbol]": "Symbols",
		"#shape_cats [data-cat=arrow]": "Arrows",
		"#shape_cats [data-cat=flowchart]": "Flowchart",
		"#shape_cats [data-cat=nature]": "Nature",
		"#shape_cats [data-cat=game]": "Cards & Chess",
		"#shape_cats [data-cat=dialog_balloon]": "Dialog baloons",
		"#shape_cats [data-cat=music]": "Music",
		"#shape_cats [data-cat=weather]": "Weather & Time",
		"#shape_cats [data-cat=ui]": "User Interface",
		"#shape_cats [data-cat=social]": "Social We",
		
		// ????????????
		"#button_ungroup":"Ungroup",
		"#canvas_title + span": "Title",
		"#canvas_width + span": "Width",
		"#canvas_height + span": "Height",
		"#canvas_panel .draginput:eq(3) span": "Color",
		"#canvas_panel .draginput:eq(4) span": "Sizes",
		"#rect_width + span": "Width",
		"#rect_height + span": "Height",
		"#image_width + span": "Width",
		"#image_height + span": "Height",
		"#circle_panel .draginput:eq(0) span": "Center X",
		"#circle_panel .draginput:eq(1) span": "Center Y",
		"#circle_panel .draginput:eq(2) span": "Radius",
		"#ellipse_rx + span": "Radius X",
		"#ellipse_ry + span": "Radius Y",
		"#line_x1 + span": "Start X",
		"#line_y1 + span": "Start Y",
		"#line_x2 + span": "End X",
		"#line_y2 + span": "End Y",
		"#textPath_offset + span": "Offset",
		"#text + span": "Content",
		"#text_panel .draginput:eq(3) span": "Font",
		"#text_panel .draginput:eq(4) span": "Font Style",
		"#font_size + span": "Font size",
		"#path_node_panel .draginput:eq(2) span": "Seg Type",
		"#angle + span": "Rotation",
		"#group_opacity + span": "Opacity",
		"#blur + span": "Blur",
		"#rect_rx + span": "Roundness",
		"#stroke_width + span": "Width",
		"#stroke_panel .draginput:eq(1) span": "Dash",
		
		"#color_picker .jGraduate_tab_color":"Solid Color",
		"#color_picker .jGraduate_tab_lingrad":"Linear Gradient",
		"#color_picker .jGraduate_tab_radgrad":"Radial Gradient",
		"#color_picker .jGraduate_Form:eq(0) > .jGraduate_StopSection:eq(0) > label":"Begin Point",
		"#color_picker .jGraduate_Form:eq(0) > .jGraduate_StopSection:eq(1) > label":"End Point",
		"#color_picker .jGraduate_Form:eq(1) > .jGraduate_StopSection:eq(0) > label":"Center Point",
		"#color_picker .jGraduate_Form:eq(01) > .jGraduate_StopSection:eq(1) > label":"Focal Point",
		"#color_picker .jGraduate_OpacField .prelabel":"Opac:",
		"#color_picker .jGraduate_RadiusField .prelabel":"Radius:",
		"#color_picker .jGraduate_EllipField .prelabel":"Ellip:",
		"#color_picker .jGraduate_AngleField .prelabel":"Angle:",		
		"#color_picker input[type='button'].Cancel":"Cancel",
		"#color_picker input[type='button'].Ok":"Ok",	
	};
	drawLang.zh = {
		'#menu_bar .menu:eq(1) .menu_title':"??????",
		'#menu_bar .menu:eq(2) .menu_title':"??????",
		'#menu_bar .menu:eq(3) .menu_title':"??????",
		'#menu_bar .menu:eq(4) .menu_title':"??????",
	
		"#align_tools h4": "????????????",
		"#canvas_panel h4": "??????",
		"#circle_panel h4": "??????",
		"#ellipse_panel h4": "??????",
		"#g_panel h4": "??????",
		"#image_panel h4": "??????",
		"#line_panel h4": "??????",
		"#multiselected_panel h4": "????????????",
		"#path_node_panel h4": "????????????",
		"#path_panel h4": "??????",
		"#rect_panel h4": "??????",
		"#stroke_panel h4": "????????????",
		"#svg_panel h4": "SVG",
		"#text_panel h4": "??????",
		"#textpath-panel h4": "????????????",
		"#use_panel h4": "??????",
		
		
		"#tool_download":"????????????",
		"#modal_shortcuts": "?????????...",
		"#tool_clear": "????????????",
		"#tool_open": "??????SVG...",
		"#tool_import": "????????????",
		"#tool_save": "????????????",
		"#tool_export": "??????PNG",
		"#tool_undo": "??????",
		"#tool_redo": "??????",
		"#tool_cut": "??????",
		"#tool_copy": "??????",
		"#tool_paste": "??????",
		"#tool_clone": "??????",
		"#tool_delete": "??????",
		"#tool_move_top": "????????????",
		"#tool_move_up": "????????????",
		"#tool_move_down": "????????????",
		"#tool_move_bottom": "????????????",
		"#tool_group": "??????",
		"#tool_ungroup": "????????????",
		"#tool_topath": "???????????????",
		"#tool_reorient": "????????????",
		"#tool_rulers": "????????????",
		"#tool_wireframe": "????????????",
		"#tool_source": "?????????...",
		"[title='Switch to lightmode']": "?????????lightmode",
		"#selectedPredefined": "?????????",
		"#fitToContent": "????????????",
		"#resolution_label": "?????????",
		"#tool_release_text_on_path": "????????????",
		"#font_sizeLabel": "????????????",
		"#tool_unlink_use": "??????????????????",
		"[title='Ungroup Elements']": "????????????",
		"#straight_segments": "???",
		"#curve_segments": "??????",
		"#seg_type_label": "??????",
		"[title='Adds a node']": "????????????",
		"[title='Delete Node']": "????????????",
		"[title='Open/close sub-path']": "??????/???????????????",
		"#group_opacityLabel": "?????????",
		"[title='Align Left']": "?????????",
		"[title='Align Center']": "????????????",
		"[title='Align Right']": "?????????",
		"[title='Align Top']": "????????????",
		"[title='Align Middle']": "????????????",
		"[title='Align Bottom']": "????????????",
		"#selected_objects": "???????????????",
		"#page": "????????????",
		"#button_group": "????????????",
		"[title='Place text on path']": "????????????",
		"[title='Select Tool [V]']": "????????????[V]",
		"[title='Pencil Tool [P]']": "????????????",
		"[title='Line Tool [L]']": "????????????",
		"[title='Square/Rect Tool [R]']": "??????/??????",
		"[title='Ellipse/Circle Tool [C]']": "??????/???",
		"[title='Path Tool [P]']": "????????????",
		"[title='Text Tool [T]']": "????????????",
		"[title='Zoom Tool [Z]']": "????????????",
		"[title='Eyedropper Tool [E]']": "????????????",
		"[title='Switch stroke and fill colors [X]']": "???????????????????????????[X]",
		"[title='Change fill color']": "??????????????????",
		"[title='Change stroke color']": "??????????????????",
		"[title='Change zoom level']": "??????????????????",
		"[href='#cut']": "??????",
		"[href='#copy']": "??????",
		"[href='#paste']": "??????",
		"[href='#delete']": "??????",
		"[href='#group']": "??????",
		"[href='#ungroup']": "????????????",
		"[href='#move_front']": "????????????",
		"[href='#move_up']": "????????????",
		"[href='#move_down']": "????????????",
		"[href='#move_back']": "????????????",
		"[title='star_points_5']": "?????????",
		"[title='donut']": "?????????",
		"[title='triangle']": "?????????",
		"[title='right_triangle']": "???????????????",
		"[title='diamond']": "??????",
		"[title='pentagon']": "?????????",
		"[title='hexagon']": "?????????",
		"[title='septagon1']": "??????1",
		"[title='heptagon']": "?????????",
		"[title='decagon']": "?????????",
		"[title='dodecagon']": "????????????",
		"[title='trapezoid']": "??????",
		"[title='heart']": "??????",
		"[title='cylinder']": "??????",
		"[title='plaque']": "??????",
		"[title='page']": "??????",
		"[title='cross']": "??????",
		"[title='divide']": "???",
		"[title='minus']": "???",
		"[title='times']": "???",
		"#tool_source_cancel": "??????",
		"#tool_source_save": "??????",
		
		// ??????
		"#shape_cats [data-cat=basic]": "??????",
		"#shape_cats [data-cat=object]": "??????",
		"#shape_cats [data-cat=symbol]": "??????",
		"#shape_cats [data-cat=arrow]": "??????",
		"#shape_cats [data-cat=flowchart]": "?????????",
		"#shape_cats [data-cat=nature]": "??????",
		"#shape_cats [data-cat=game]": "??????",
		"#shape_cats [data-cat=dialog_balloon]": "?????????",
		"#shape_cats [data-cat=music]": "??????",
		"#shape_cats [data-cat=weather]": "??????/??????",
		"#shape_cats [data-cat=ui]": "????????????",
		"#shape_cats [data-cat=social]": "????????????",
		
		"#button_ungroup":"????????????",
		"#canvas_title + span": "??????",
		"#canvas_width + span": "??????",
		"#canvas_height + span": "??????",
		"#canvas_panel .draginput:eq(3) span": "??????",
		"#canvas_panel .draginput:eq(4) span": "??????",
		"#rect_width + span": "??????",
		"#rect_height + span": "??????",
		"#image_width + span": "??????",
		"#image_height span": "??????",
		"#circle_panel .draginput:eq(0) span": "?????? X",
		"#circle_panel .draginput:eq(1) span": "?????? Y",
		"#circle_panel .draginput:eq(2) span": "??????",
		"#ellipse_rx + span": "?????? X",
		"#ellipse_ry + span": "?????? Y",
		"#line_x1 + span": "?????? X",
		"#line_y1 + span": "?????? Y",
		"#line_x2 + span": "?????? X",
		"#line_y2 + span": "?????? Y",
		"#textPath_offset + span": "??????",
		"#text + span": "??????",
		"#text_panel .draginput:eq(3) span": "??????",
		"#text_panel .draginput:eq(4) span": "????????????",
		"#font_size + span": "????????????",
		"#path_node_panel .draginput:eq(2) span": "????????????",
		"#angle + span": "??????",
		"#group_opacity + span": "?????????",
		"#blur + span": "??????",
		"#rect_rx + span": "Roundness",
		"#stroke_width + span": "??????",
		"#stroke_panel .draginput:eq(1) span": "????????????",
		
		"#color_picker .jGraduate_tab_color":"??????",		//Solid Color
		"#color_picker .jGraduate_tab_lingrad":"????????????",	//Linear Gradient
		"#color_picker .jGraduate_tab_radgrad":"????????????",	//Radial Gradient
		"#color_picker .jGraduate_Form:eq(0) > .jGraduate_StopSection:eq(0) > label":"?????????",
		"#color_picker .jGraduate_Form:eq(0) > .jGraduate_StopSection:eq(1) > label":"?????????",
		"#color_picker .jGraduate_Form:eq(1) > .jGraduate_StopSection:eq(0) > label":"?????????",
		"#color_picker .jGraduate_Form:eq(01) > .jGraduate_StopSection:eq(1) > label":"??????",
		"#color_picker .jGraduate_OpacField .prelabel":"??????",
		"#color_picker .jGraduate_RadiusField .prelabel":"??????",
		"#color_picker .jGraduate_EllipField .prelabel":"??????",
		"#color_picker .jGraduate_AngleField .prelabel":"??????",
		"#color_picker input[type='button'].Cancel":"??????",
		"#color_picker input[type='button'].Ok":"??????",		
	};
	
	var setText = function(selector,text){
		var $dom = $(selector);
		if($dom.length != 1) return;
		if(selector.indexOf("input[type='button']") != -1){
			return $dom.val(text);
		}
		if(selector.indexOf('[title=') != -1){
			return $dom.attr('title',text);
		}
		
		var nodes = $dom.get(0).childNodes;
		for (var i = 0; i < nodes.length; i++){
			if(nodes[i].nodeType != 3) continue;
			nodes[i].textContent = text;
			break;
		}
	};
	/*
	// ??????
	var textMap = {};
	$("[id],a[href],[title]").each(function(){
		var $item = $(this).clone();
		var $children = $item.children();
		if($children.length > 1) return;
		$item.children().remove();
		if($item.attr('title')){textMap["[title='"+$item.attr('title')+"']"] = $item.attr('title');return;}
	
		var text = $item.text().trim();
		if(!text || text.indexOf('\n') != '-1' || text.length <= 1) return;    
		if($item.attr('id')){textMap['#'+$item.attr('id')] = text;}
		if($item.attr('href')){textMap["[href='"+$item.attr('href')+"']"] = text;}
	});
	console.log(textMap,JSON.stringify(textMap,null,"    "))
	
	// ?????????
	var aa = {};
	$("#panels .context_panel h4").each(function(){
		var $item = $(this);
		aa['#'+$item.parent().attr('id')+" h4"] = $item.text();
	});console.log(JSON.stringify(aa,null,"    "))
	
	var aa = {};
	$(".draginputs .draginput span").each(function(){
		var $item = $(this);
		var text  = $item.text().trim();
		if(!text || text.indexOf('\n') != '-1' || text.length <= 1) return;
		var prevID = $item.prev().attr('id');
		var textKey = '#'+prevID+" + span";
		if(!prevID){
			var panelID = $item.parents('.context_panel').attr('id');
			var $input = $item.parent();
			var index  = $input.parent().children('.draginput').index($input);
			if(index == -1 || !panelID) return;
			aa['#'+panelID+" .draginput:eq("+index+")"] = text;			
		}
	});console.log(JSON.stringify(aa,null,"    "));
	*/
	drawLang.change = function(lang){
		if(lang.indexOf('zh') != -1){lang = 'zh'};
		if(!drawLang[lang]){lang = 'en'};
		// if(lang == drawLang.current) return;
		drawLang.current = lang;
				
		var langMap = drawLang[lang];
		for (var key in langMap) {
			setText(key,langMap[key]);
		}
	}
})();