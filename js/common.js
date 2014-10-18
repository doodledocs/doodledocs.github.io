"use strict";

(function(){
	var tool = null;
	var layers = null;

	window.addEventListener("load", function (){
		layers = new Layers();
		layers.createLayer();

		// $("input[name='tool'][value='brush']").on("select", )
		// $("input[name='tool'][value='crop']").on("select", )
		$("input[name='tool'][value='shape']").change(shapes_toolclick);
		$("input[name='tool'][value='text']").change(text_toolclick);
		testing();
	});

	function testing(){
		var canvas = layers.currentLayer;
		// makeRect(canvas,100,100,20,20,'red');
		// makeRect(canvas,100,100,20,20); //No fill
		// makeCircle(canvas,200,100,15,'blue');
		// makeTriangle(canvas,150,30,20,20,'green');
		makeText(canvas, 20, 20, "brown", 13, "Hello World", "Arial", "bold", 0.5);
		// shapes_toolclick(canvas);
		$("body").append($("<button>", {id:"test_button"}));
		addImageFromUrl(canvas, "http://api.flattr.com/button/flattr-badge-large.png");
		uploadImage(canvas);
		$('#imageUrl').click(function() { addImageFromUrl(canvas, $('#url').val()); });
		shapes_toolclick(canvas);
		var ab = $("#actionbar");
		ab.append($("<button>", {id:"test_button"}));

		$("#test_button").click(function(){
			makeText(canvas, getOptions());
		});
		// getOptions();
	}





})();