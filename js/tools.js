function getOptions(){
    var ab = $("#actionbar");
    options = {};
    if($('[name="size"]').val() > 0){
        options["size"] = $('[name="size"]').val();
        alert($('[name="size"]').val());
    }
    options["opacity"] = ($("#color_type").val() == "None") ? 0.0 : $('[name="opacity"]').val() / 100.0;
    options["angle"] = $('[name="angle"]').val();
    //Color settings
    if($("#color_type").val() == "Gradient"){
        alert("Need to implement Gradient (tools.js)");
    }
    if($("#color_type").val() == "Fill"){
        options["fill"] = $("#colorpicker").val();
        console.log($("#colorpicker").val());
    }
    if($("#selected_shape").val() == "Circle"){
        options["radius"] = $('[name="radius"]').val();
    } else if($("#selected_shape").val() == "Triangle" || $("#selected_shape").val() == "Rectangle"){
        options["height"] = $('[name="height"]').val();
        options["width"] = $('[name="width"]').val();
    }
    if($("#font_selection").val() != undefined){
        options["fontFamily"] = $("#font_selection").val();
    }
    if($("#fontstyle_selection").val() != undefined){
       options["fontStyle"] = $("#fontstyle_selection").val();
    }

    console.log(options);
    return options;
}

function makeShape(layer){
    // console.log($("#selected_shape").val());
    switch($("#selected_shape").val()){
        case "Circle":
            makeCircle(layer, getOptions());
            break;
        case "Triangle":
            makeTriangle(layer, getOptions());
            break;
        case "Rectangle":
            makeRect(layer, getOptions());
    }
}


function makeRect(layer, options){
    options["left"] = 200;
    options["top"] = 100;
    console.log(options);
    var rect = new fabric.Rect(options);
    layer.add(rect);
    setEvents(rect);
}

function setEvents(object) {
	var events = ["modified", "selected", "moving", "scaling", "rotating", "added", "removed"];
	for (var event in events) {
		object.on(events[event], function() {
			console.log('selected a rectangle');
		});
	}
}

function makeCircle(layer, options){
    options["left"] = 100;
    options["top"] = 50;
    console.log(options);
    var circle = new fabric.Circle(options);
    layer.add(circle);
    setEvents(circle);
}

function makeTriangle(layer, options){
    options["left"] = 200;
    options["top"] = 50;
    console.log(options);
    var triangle = new fabric.Triangle(options);
    layer.add(triangle);
    setEvents(triangle);
}

function makePolygon(){

}

function makeLine(){

}

function makeImage(layer, image){

}

function makeText(layer, string, options){
    string = "Noob";
    options["left"] = 200;
    options["top"] = 50;
    var text = new fabric.Text(string, options);
    layer.add(text);
    setEvents(text);
}