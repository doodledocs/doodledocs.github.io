var uuid;
var fire = new Firebase('https://blinding-torch-9495.firebaseio.com/');
var firstTimeUsers = true;
var firstTimeLayers = true;

$(document).ready(function() {
	// generate UUID & Username
	uuid = generateUUID();
	console.log(uuid);
	var username = 'User ' + uuid;

	fireLayers = fire.child('layers');

	// Get All layers
	fireLayers.on('value', function(snapshot){
		if (firstTimeLayers) {
			firstTimeLayers = false;
			var dLayers = snapshot.val();

			

			$.each(dLayers ,function(layerID, dLayer){
				var dLayerName = dLayer.name;
				var $curLayer = createLayer(dLayerName, layerID);
				
			});
		}
	});

	var layerName = 'Layer ' + generateLayerName();
	var newUserLayerID = fireLayers.push({
							'name' : layerName
						});

	var postLayerID = newUserLayerID.name();

	/*
		{ uuid : username }
	*/
	var json = {};
	json['' + uuid] = {
		'username' : username,
		layer : postLayerID
	};
	fireUsers = fire.child('users');
	fireUsers.update(json);

	// Get users
	fireUsers.on('value', function(snapshot){
		if (firstTimeUsers) {
			firstTimeUsers = false;
			var users = snapshot.val();
			
			$.each(users ,function(index, user){
				var curUsername = user.username;

				if (index != uuid) {
					var curULayer = user.layer;
					var $img = $('<img>');
					$img.attr('src', 'img/ppl/purple_person.png');
					$img.attr('alt', uuid);

					var $curULayerBar = $('.layerBar[data-layerid="' + curULayer + '"] .usersIconWrap');
					$curULayerBar.append($img);
				}
			});
		}
	});

});

// fire.on('child_added', function(snapshot) {
// 	var message = snapshot.val();
// 	displayChatMessage(message.name, message.text);
// });

function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
}

function createLayer(dLayerName, uLayerID){
	var $nLayer = $('<li class="layerBar">');
	$nLayer.attr('data-layerid', uLayerID);
	var $anchor = $('<a href="#">'); // need to update
	var $p = $('<p>').text(dLayerName);
	var $div = $('<div class="usersIconWrap">');

	$anchor.append($p);
	$anchor.append($div);
	$nLayer.append($anchor);

	$('#layers ul').append($nLayer);
	console.log('adding');

	return $nLayer;
}

function generateLayerName(){
    var d = new Date().getTime();
    var uuid = 'xxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid.toUpperCase();
}

