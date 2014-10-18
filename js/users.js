var uuid;
var fire = new Firebase('https://blinding-torch-9495.firebaseio.com/');

$(document).ready(function() {
	// generate UUID & Username
	uuid = generateUUID();
	console.log(uuid);
	var username = 'User ' + uuid;

	/*
		{ uuid : username }
	*/
	var json = {};
	json['' + uuid] = {
		name : username,
		layer : 2;
	};
	fireUsers = fire.child('users');
	fireUsers.update(json);

	// Get users
	fireUsers.on('value', function(snapshot){
		var users = snapshot.val();
		users.forEach(function(element, index){
			console.log(element['name']);
		});
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