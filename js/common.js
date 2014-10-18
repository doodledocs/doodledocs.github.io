"use strict";

(function(){
	var color = "000000";
	var tool = null;
	var layers = null;

	window.addEventListener("load", function (){
		layers = new Layers();
		layers.createLayer();
		testing();
	});

	function testing(){
		var canvas = layers.currentLayer;
		makeRect(canvas,100,100,20,20,'red');
		makeRect(canvas,100,100,20,20); //No fill
		makeCircle(canvas,200,100,15,'blue');
		makeTriangle(canvas,150,30,20,20,'green');
		makeText(canvas, 20, 20, "brown", 13, "Hello World", "Arial", "bold", 0.5);
		addImageFromUrl(canvas, "http://api.flattr.com/button/flattr-badge-large.png");
		uploadImage(canvas);
		$('#imageUrl').click(function() { addImageFromUrl(canvas, $('#url').val()); });
	}





})();