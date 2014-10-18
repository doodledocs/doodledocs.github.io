var Layers = function(){
	this.layerNum = 1;

	this.createLayer = function(){
		var name = "layer" + this.layerNum;
		this.layerNum++;
		var $layer = $("<canvas>", {"id":name, "width":800, "height":600});
		$("#layers").append($layer);

		//Send layer to firebase
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


