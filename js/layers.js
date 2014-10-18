var Layers = function(){
	this.layerNum = 1;
	this.currentLayer = null;
	this.layersList = [];

	this.createLayer = function(){
		var name = "layer" + this.layerNum;
		this.layerNum++;
		//Create native canvas
		var canvas = $("<canvas>", {"id":name});
		$("#layers").append(canvas);
		//Create fabricjs wrapper
		var $layer = new fabric.Canvas(name);
		this.layersList.push($layer);
		this.currentLayer = $layer;
		
		console.log($layer);
		//Send layer to firebase

		return $layer;
	}	

	this.getLayers = function(){
		//Pull in layers from firebase
		alert("Need to implement getLayers");
	}

	this.deleteLayer = function(layer){
		//Delete a layer
		alert("Need to implement deleteLayer");
	}

	this.updateLater = function(){
		//Update a layer
		//This function should be called by any action and should update firebase
		alert("Need to implement updateLater");
	}

}


