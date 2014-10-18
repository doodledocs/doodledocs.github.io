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

function makeShape(canvas){
    // console.log($("#selected_shape").val());
    switch($("#selected_shape").val()){
        case "Circle":
            makeCircle(canvas, getOptions());
            break;
        case "Triangle":
            makeTriangle(canvas, getOptions());
            break;
        case "Rectangle":
            makeRect(canvas, getOptions());
    }
}


function makeRect(canvas, options){
    options["left"] = 200;
    options["top"] = 100;
    options["height"] = 110;
    options["width"] = 210;

    console.log(options);
    var rect = new fabric.Rect(options);
    canvas.add(rect);
    setEvents(rect);
}

function setEvents(object) {
	var events = ["modified", "selected", "moving", "scaling", "rotating", "added", "removed"];
	for (var event in events) {
		object.on(events[event], function() {
            console.log(object);
		});
	}
}

function makeCircle(canvas, options){
    options["left"] = 100;
    options["top"] = 50;
    console.log(options);
    var circle = new fabric.Circle(options);
    canvas.add(circle);
    setEvents(circle);
}

function toggleDrawingMode(layer){
    var toggle = !layer.canvas.isDrawingMode;
    console.log("Drawing mode: " + toggle);
    layer.canvas.isDrawingMode = toggle;
}

function makeTriangle(canvas, options){
    options["left"] = 200;
    options["top"] = 50;
    console.log(options);
    var triangle = new fabric.Triangle(options);
    canvas.add(triangle);
    setEvents(triangle);
}

function addImageFromUrl(canvas, url) {
    fabric.Image.fromURL(url, function(oImg) {
      canvas.add(oImg);
    });
}

function uploadImage(canvas) {
    var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);

    function handleImage(e){
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            addImageFromUrl(canvas, event.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);     
    }
}

function makeText(canvas, string, options){
    string = "Noob";
    options["left"] = 200;
    options["top"] = 50;
    var text = new fabric.Text(string, options);
    canvas.add(text);
    setEvents(text);
}