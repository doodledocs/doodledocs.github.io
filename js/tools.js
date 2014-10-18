function getOptions(posX, posY){
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
        options["radius"] = 50;
    } else if($("#selected_shape").val() == "Triangle" || $("#selected_shape").val() == "Rectangle"){
        options["height"] = 100;
        options["width"] = 100;
    }
    if($("#font_selection").val() != undefined){
        options["fontFamily"] = $("#font_selection").val();
    }
    if($("#fontstyle_selection").val() != undefined){
       options["fontStyle"] = $("#fontstyle_selection").val();
    }
    options["left"] = posX - 100;
    options["top"] = posY - 100;

    console.log(options);
    return options;
}

function shape_click(layers){
    layers.currentLayer.canvas.on('mouse:down', function(options) {
            var posX = options.e.clientX;
            var posY = options.e.clientY;
            console.log(posX, posY);
            console.log(options.target);
            if(options.target == undefined){
                makeShape(layers.currentLayer.canvas, posX, posY);
            }
    });
}

function makeShape(canvas, posX, posY){
    switch($("#selected_shape").val()){
        case "Circle":
            makeCircle(canvas, getOptions(posX, posY));
            break;
        case "Triangle":
            makeTriangle(canvas, getOptions(posX, posY));
            break;
        case "Rectangle":
            makeRect(canvas, getOptions(posX, posY));
    }
}

function popup(canvas) {
    var modal = picoModal({content: "<label>Image File:</label><br/><input type='file' id='imageLoader' name='imageLoader'/><input type='text' id='url' placeholder='Submit URL' /><button id='imageUrl'>Go</button>",
        overlayClose: true});
        modal.afterCreate(function(mod) { 
            uploadImage(canvas, modal);
            $('#imageUrl').click(function() { 
                addImageFromUrl(canvas, $('#url').val());

                modal.close();
            });
        });
        modal.show();
}

function makeRect(canvas, options){
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

function uploadImage(canvas, modal) {
    var imageLoader = document.getElementById('imageLoader');
    if (imageLoader) {
        imageLoader.addEventListener('change', handleImage, false);
    }
    function handleImage(e){
        modal.close()
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