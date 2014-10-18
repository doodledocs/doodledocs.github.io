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

	function setEvents(object) {
		var events = ["object:modified", "object:selected", "object:moving", "object:scaling", "object:rotating", "object:added", "object:removed"];
		rect.on('selected', function() {
			console.log('selected a rectangle');
		});
		/*for (var event in events) {
			canvas.on(events[event], function(options) {
				console.log('testing');
			});		

		}*/

/*		canvas.on('object:modified', function(options) {
			console.log(options.e.clientX, options.e.clientY);
		});		
		canvas.on('object:selected', function(options) {
			console.log(options.e.clientX, options.e.clientY);
		});
		canvas.on('object:moving', function(options) {
			console.log(options.e.clientX, options.e.clientY);
		});	
		canvas.on('object:scaling', function(options) {
			console.log(options.e.clientX, options.e.clientY);
		});		
		canvas.on('object:rotating', function(options) {
			console.log(options.e.clientX, options.e.clientY);
		});
		canvas.on('object:added', function(options) {
			console.log(options.e.clientX, options.e.clientY);
		});	
		canvas.on('object:removed', function(options) {
			console.log(options.e.clientX, options.e.clientY);
		});	*/
	}

}


