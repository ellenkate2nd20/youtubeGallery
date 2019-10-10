var AppActions = require('../actions/AppActions');

var firebase = require("firebase");
var config = 
{
	apiKey: "AIzaSyBX2s5Uk3C9MxKP9Mrgu7OFLB-8QBvjw5Y",
    authDomain: "gallery-5fc59.firebaseapp.com",
    databaseURL: "https://gallery-5fc59.firebaseio.com",
    projectId: "gallery-5fc59",
    storageBucket: "gallery-5fc59.appspot.com",
    messagingSenderId: "209429747100"
};

firebase.initializeApp(config);

var fbRef = firebase.database().ref();

module.exports = 
{
	addVideo: function(video)
	{
		var videoRef = fbRef.child('videos');
		videoRef.push().set(video);
	},

	getVideos: function()
	{
		var videoRef = fbRef.child('videos');
		videoRef.once('value', function(snapshot)
		{
			var videos = [];
			snapshot.forEach(function(childSnapshot)
			{
				var video = videos.push(
				{
					id: childSnapshot.key,
					title: childSnapshot.val().title,
					video_id: childSnapshot.val().video_id,
					description: childSnapshot.val().description
				});

				AppActions.receiveVideos(videos);
			});

			console.log(videos);
		});
	},

	removeVideo: function(id)
	{
		var videoRef = fbRef.child('videos/' + id);
		videoRef.remove();
	}
}