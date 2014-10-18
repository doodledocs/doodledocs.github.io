function shapes_toolclick(){
	var ab = $("#actionbar");
	ab.empty();
	var group = $("<select>", {id:"selected_shape"});								//Shape Selection
	group.append($("<option>Circle</option>", {value:"Circle"}));
	group.append($("<option>Triangle</option>", {value:"Triangle"}));
	group.append($("<option>Rectangle</option>", {value:"Rectangle"}));
	ab.append(group);
	// group.on("change", update_shape_tool);
	standard_options();
}

function erase_toolclick(layer){
	var ab = $("#actionbar");
	ab.empty();
	var remove = $("<button>", {id:"remove"});
	remove.html("Erase Selected Object");
	remove.on("click", function(){
		var object = layer.canvas.getActiveObject();
		if(object != undefined){
			layer.canvas.remove(object);
		}
	});
	ab.append(remove);
	var eraseAll = $("<button>", {id:"eraseAll"});
	eraseAll.html("Erase All Objects");
	eraseAll.on("click", function(){
		layer.canvas.clear();
	});
	ab.append(eraseAll);
}

function text_toolclick(){
	var ab = $("#actionbar");
	ab.empty();
	ab.append("size:");
	ab.append($("<input>", {name:"size", type:"number", value:12, width:30}));		//Size
	var group = $("<select>", {id:"font_selection"});								//Font Selection
	group.append($("<option>Arial</option>", {value:"Arial"}));
	group.append($("<option>Cambria</option>", {value:"Cambria"}));
	group.append($("<option>Comic Sans</option>", {value:"Comic Sans"}));
	ab.append(group);
	var group = $("<select>", {id:"fontstyle_selection"});							//Style Selection
	group.append($("<option>Normal</option>", {value:"Normal"}));
	group.append($("<option>Bold</option>", {value:"Bold"}));
	group.append($("<option>Italic</option>", {value:"Italic"}));
	ab.append(group);
	standard_options();
}

function brush_toolclick(layer){
	var ab = $("#actionbar");
	ab.empty();

	//Drawing mode
	var toggle = $("<button>", {id:"toggleDrawingMode"});
	toggle.html("Toggle Drawing Mode");
	toggle.on("click", function(){
		toggleDrawingMode(layer);
	});
	ab.append(toggle);

	//Pen size
	ab.append("Pen size:");
	var pen_size = $("<input>", {id:"brush_size", type:"range", min:1, max:64, value:5, width:64});
	pen_size.change(function(){
		layer.canvas.freeDrawingBrush.width = pen_size.val();
	})
	ab.append(pen_size);
	
	//Pen color
	var pen_color = $("<input>", {id:"pen_color", type:"color"});
	pen_color.change(function(){
		var color = pen_color.val();
		console.log("Changing pen color to " + color);
		layer.canvas.freeDrawingBrush.color = color;
	})
	ab.append(pen_color);
}

function filters_toolclick(layer){
	var ab = $("#actionbar");
	ab.empty();

	//Filters
	var group = $("<select>", {id:"filter_type"});													//Color Type Selection (Fill/Gradient/None)
	group.append($("<option>Grayscale</option>", {value:"Grayscale"}));
	group.append($("<option>Sepia</option>", {value:"Sepia"}));
	group.append($("<option>Pixelate</option>", {value:"Pixelate"}));
	group.append($("<option>Noise</option>", {value:"Noise"}));
	ab.append(group);

	var apply = $("<button>", {id:"apply_filters"});
	apply.html("Apply filter to selected");
	apply.on("click", function(){
		prepareFilter(layer);
	});
	ab.append(apply);

}

function standard_options(){
	var ab = $("#actionbar");
	ab.append("opacity:");
	ab.append($("<input>", {name:"opacity", type:"number", value:100, width:35, min:0, max:100}));	//Opacity
	ab.append("angle:");
	ab.append($("<input>", {name:"angle", type:"number", value:0, width:35, min:0, max:100}));		//Angle

	var group = $("<select>", {id:"color_type"});													//Color Type Selection (Fill/Gradient/None)
	group.append($("<option>Fill</option>", {value:"Fill"}));
	group.append($("<option>Gradient</option>", {value:"Gradient"}));
	group.append($("<option>None</option>", {value:"None"}));
	ab.append(group);
	ab.append($("<span>", {id:"color_options"}));
	group.on("change", color_options);
	color_options();
}

function color_options(){
	var co = $("#color_options");
	co.empty();
	switch($("#color_type").val()){
        case "Fill":
        	co.append($("<input>", {id:"colorpicker", type:"color", name:"color"}));		//Color Picker
            break;
        case "Gradient":

        	break;
    }
	
}