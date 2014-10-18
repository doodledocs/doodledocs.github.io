function makeRect(layer, left, top, width, height, fill, angle, opacity){
    angle = typeof angle !== 'undefined' ? angle : 0;
    fill = typeof fill !== 'undefined' ? fill : null;
    opacity = typeof opacity !== 'undefined' ? opacity : 1.0;


    var rect = new fabric.Rect({
        left: left,
        top: top,
        fill: fill,
        width: width,
        height: height,
        angle: angle,
        opacity: opacity
    });
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

function makeCircle(layer, left, top, radius, fill, angle, opacity){
    angle = typeof angle !== 'undefined' ? angle : 0;
    fill = typeof fill !== 'undefined' ? fill : null;
    opacity = typeof opacity !== 'undefined' ? opacity : 1.0;

    var circle = new fabric.Circle({
        left: left,
        top: top,
        fill: fill,
        radius: radius,
        angle: angle,
        opacity: opacity
    });
    layer.add(circle);
    setEvents(circle);
}

function makeTriangle(layer, left, top, width, height, fill, angle, opacity){
    angle = typeof angle !== 'undefined' ? angle : 0;
    fill = typeof fill !== 'undefined' ? fill : null;
    opacity = typeof opacity !== 'undefined' ? opacity : 1.0;
    
    var triangle = new fabric.Triangle({
        left: left,
        top: top,
        fill: fill,
        width: width,
        height: height,
        angle: angle,
        opacity: opacity
    });
    layer.add(triangle);
    setEvents(triangle);
}

function makePolygon(){

}

function makeLine(){

}

function makeImage(layer, image){

}

function makeText(layer, left, top, fill, size, string, fontFamily, style, opacity){
    fill = typeof fill !== 'undefined' ? fill : null;
    opacity = typeof opacity !== 'undefined' ? opacity : 1.0;
    
    var text = new fabric.Text(string, {
        left: left,
        top: top,
        fill: fill,
        fontFamily: fontFamily,
        fontSize: size,
        fontStyle: style,
        opacity: opacity
    });
    layer.add(text);
    setEvents(text);
}