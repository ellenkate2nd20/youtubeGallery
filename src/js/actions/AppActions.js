// chứa lib dispatcher + constants, tạo các hàm actions có trong constants 

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = 
{
	addVideo: function(video)
	{
		AppDispatcher.handleViewAction(
		{
			actionType: AppConstants.ADD_VIDEO,
			video: video
		});
	},

	receiveVideos: function(videos)
	{
		AppDispatcher.handleViewAction(
		{
			actionType: AppConstants.RECEIVE_VIDEO,
			videos: videos
		});
	},

	removeVideo: function(id)
	{
		AppDispatcher.handleViewAction(
		{
			actionType: AppConstants.REMOVE_VIDEO,
			id: id
		});
	},
}

module.exports = AppActions;