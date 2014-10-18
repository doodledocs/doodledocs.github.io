"use strict";

(function(){
	var tool = null;
	var layers = null;
	var userID = null;

	window.addEventListener("load", function (){
		layers = new Layers();
		layers.currentLayer = layers.createLayer();
		shape_click(layers);
		$("input[name='tool']").change(function(){
			// var value = $(this).val();
			switch ($(this).val()){
				case "brush":
					brush_toolclick(layers.currentLayer);
					break;
				case "text":
					text_toolclick(layers.currentLayer);
					break;
				case "shape":
					shape_click(layers);
					shapes_toolclick(layers.currentLayer);
					break;
			}
		})
		testing();
	});

	function testing(){
		var canvas = layers.currentLayer.canvas;
		canvas.on('mouse:down', function(options) {
  			console.log(options.e.clientX, options.e.clientY);
		});
		// var options = {opacity: 1.0, angle: "0", fill: "#000000", height: "1", width: "1"};
		// makeRect(canvas, options);
		// makeText(canvas, 20, 20, "brown", 13, "Hello World", "Arial", "bold", 0.5);
		// shapes_toolclick(canvas);
		// $("body").append($("<button>", {id:"test_button"}));
		addImageFromUrl(canvas, "http://api.flattr.com/button/flattr-badge-large.png");
		uploadImage(canvas);
		$('#pushNotify').click(function() { popup(canvas); });
		shapes_toolclick(canvas);
		var ab = $("#actionbar");
		$("body").append($("<button>", {id:"test_button"}));
		$("#test_button").on("click", function(){
			// makeText(canvas, getOptions());
			makeShape(canvas, getOptions());
			// alert();
		});
		// getOptions();
		// brush_toolclick(layers.currentLayer);
	}





})();