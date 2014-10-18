"use strict";
var layers = null;
(function(){
	// var layers = null;
	// window.addEventListener("load", function (){
	$(document).ready(function(){
		layers = new Layers();

		$('#layers').on('click', 'li:not(.selected)', function(event) {
			var layerID = $(this).attr('data-layerid');
			var $liSel = $(this).siblings(".selected");
			var $imgUser = $liSel.find('img[alt="' + uuid + '"]');

			console.log($imgUser.attr('alt'));

			$liSel.removeClass('selected');

			$(this).addClass('selected');

			var $usersIconWrap = $(this).find('.usersIconWrap');

			// $imgUser.appendTo($usersIconWrap);

			var fireUsers = fire.child('users');

			var fireCurUser = fireUsers.child('' + uuid);

			fireCurUser.update({
				layer : layerID
			});
			this.layers.currentLayer.layerID = layerID;

		});

		layers.currentLayer = layers.createLayer(currentLayerID);
		shape_click(layers);
		$("input[name='tool']").change(function(){
			// var value = $(this).val();
			switch ($(this).val()){
				case "brush":
					brush_toolclick(layers.currentLayer);
					break;
				case "text":
					layers.currentLayer.canvas.isDrawingMode = false;
					text_toolclick(layers.currentLayer);
					break;
				case "shape":
					layers.currentLayer.canvas.isDrawingMode = false;
					shape_click(layers);
					shapes_toolclick(layers.currentLayer);
					break;
				case "eraser":
					layers.currentLayer.canvas.isDrawingMode = false;
					erase_toolclick(layers.currentLayer);
					break;
				case "filters":
					layers.currentLayer.canvas.isDrawingMode = false;
					filters_toolclick(layers.currentLayer);
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
		$('#colorpicker').on('change', function() {
			canvas.getActiveObject().set('fill', $('#colorpicker').val());
			canvas.renderAll();
		});
		canvas.on('object:selected', function(options) {
			if (options.target) {
				$('#colorpicker').val()
				console.log('an object was clicked! ', options.target.type);
			}
		});
		// getOptions();
		// brush_toolclick(layers.currentLayer);
	}


	var fEvents = fire.child('events');

	fEvents.on('child_added', function(snapshot) {
		var eventE = snapshot.val();
		var eObj = eventE.object;
		var eLayerID = eventE.layerID;

		console.log(eObj);
		console.log(eLayerID);
	});


})();