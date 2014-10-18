"use strict";

(function(){
	var tool = null;
	var layers = null;
	var userID = null;

	window.addEventListener("load", function (){
		layers = new Layers();
		layers.currentLayer = layers.createLayer();

		// $("input[name='tool'][value='brush']").on("select", )
		// $("input[name='tool'][value='crop']").on("select", )
		$("input[name='tool'][value='shape']").change(function(){
			shapes_toolclick(layers.currentLayer);
		});
		$("input[name='tool'][value='text']").change(function(){
			text_toolclick(layers.currentLayer);
		});
		$("input[name='tool'][value='brush']").change(function(){
			brush_toolclick(layers.currentLayer);
		});
		testing();
	});

	function testing(){
		var canvas = layers.currentLayer.canvas;
		var options = {opacity: 1.0, angle: "0", fill: "#000000", height: "1", width: "1"};
		makeRect(canvas, options);
		// makeText(canvas, 20, 20, "brown", 13, "Hello World", "Arial", "bold", 0.5);
		// shapes_toolclick(canvas);
		// $("body").append($("<button>", {id:"test_button"}));
		addImageFromUrl(canvas, "http://api.flattr.com/button/flattr-badge-large.png");
		uploadImage(canvas);
		$('#imageUrl').click(function() { addImageFromUrl(canvas, $('#url').val()); });
		// shapes_toolclick(canvas);
		var ab = $("#actionbar");
		$("body").append($("<button>", {id:"test_button"}));
		$("body").append($("<button>", {id:"drawingmode"}));
		$("#drawingmode").on("click", function(){
				toggleDrawingMode(layers.currentLayer);
			});
		$("#test_button").on("click", function(){
			// makeText(canvas, getOptions());
			makeShape(canvas, getOptions());
			// alert();
		});
		// getOptions();
		// brush_toolclick(layers.currentLayer);
	}





})();