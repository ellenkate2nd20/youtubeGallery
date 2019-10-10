var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var eventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _videos = [];

var AppStore = assign({}, eventEmitter.prototype, 
{	
	// default function
	emitChange: function()
	{
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback)
	{
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback)
	{
		this.removeListener(CHANGE_EVENT, callback);
	},

	// handle events
	setVideos: function(videos)
	{
		_videos = videos;
	},

	getVideos: function()
	{
		return _videos;
	},

	addVideo: function(video)
	{
		_videos.push(video);
	},

	removeVideo: function(id)
	{
		var index = _videos.findIndex(x => x.id === id);
		_videos.splice(index, 1);
	}
});

AppDispatcher.register(function(payload)
{
	// action from handleViewAction
	var action = payload.action;

	switch(action.actionType)
	{
		case AppConstants.ADD_VIDEO:
			console.log('Adding video...')
			
			// add to store
			AppStore.addVideo(action.video);

			// add to API
			AppAPI.addVideo(action.video);

			break;

		case AppConstants.RECEIVE_VIDEO:
			console.log('Receiving video...')
			
			// set to store
			AppStore.setVideos(action.videos);

			break;

		case AppConstants.REMOVE_VIDEO:
			console.log('Removing video...')

			// remove from store
			AppStore.removeVideo(action.id);

			// remove from API
			AppAPI.removeVideo(action.id);

			break;
	}
	
	AppStore.emitChange();
	return true;
});

module.exports = AppStore;