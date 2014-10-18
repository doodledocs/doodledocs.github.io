function makeRect(layer, left, top, width, height, fill){
	var rect = new fabric.Rect({
	  left: left,
	  top: top,
	  fill: fill,
	  width: width,
	  height: height
	});
	layer.add(rect);
}

function makeCircle(layer, left, top, radius, fill){
	var circle = new fabric.Circle({
	  left: left,
	  top: top,
	  fill: fill,
	  radius: radius
	});
	layer.add(circle);
	setEvents(circle);

}

function setEvents(object) {
	var events = ["modified", "selected", "moving", "scaling", "rotating", "added", "removed"];
	for (var event in events) {
		object.on(events[event], function() {
			console.log('selected a rectangle');
		});
	}
}

function makeTriangle(){

}

function makeEllipse(){

}

function makePolygon(){

}

function makeLine(){

}