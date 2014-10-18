var uuid;
var fire = new Firebase('https://blinding-torch-9495.firebaseio.com/');

$(document).ready(function() {
	uuid = generateUUID();
	console.log(uuid);

	fireUsers = fire.child('users');

	fireUsers.set({
		'event': 'newUser',
		'uuid': uuid
	});

});

fire.on('child_added', function(snapshot) {
	var message = snapshot.val();
	displayChatMessage(message.name, message.text);
});

function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
}