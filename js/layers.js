var Layers = function(){
	this.layerNum = 1;
	this.currentLayer = null;
	this.layersList = [];

	this.createLayer = function(layerID){
		var layer = new Layer();

		layer.layerName = "layer" + this.layerNum;
		this.layerNum++;
		
		// layer.layerID = layerID;

		//Create native canvas
		var canvas = $("<canvas>", {"id":layer.layerName});
		$("#canvasWrap").append(canvas);

		//Create fabricjs wrapper
		layer.canvas = new fabric.Canvas(layer.layerName);
		layer.canvas.setDimensions({
			"height":600,
			"width":750,
			isDrawingMode:false
		});


		this.layersList.push(layer.canvas);
		this.currentLayer = layer;
		console.log(layer.canvas);
		//Send layer to firebase
		return layer;
	}

	this.getLayers = function(){
		//Pull in layers from firebase
		alert("Need to implement getLayers");
	}

	this.deleteLayer = function(layer){
		//Delete a layer
		alert("Need to implement deleteLayer");
	}

	this.updateLayer = function(){
		//Update a layer
		//This function should be called by any action and should update firebase
		alert("Need to implement updateLater");
	}

	this.changeLayers = function(newLayer){

	}
}

var Layer = function (){
	this.layerName = null;
	this.layerID = null;
	this.canvas = null;
}


