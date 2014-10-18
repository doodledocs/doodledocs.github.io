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
}

function makeTriangle(){

}

function makeEllipse(){

}

function makePolygon(){

}

function makeLine(){

}