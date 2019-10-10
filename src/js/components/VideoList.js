var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var Video = require('./Video.js');

var VideoList = createReactClass(
{	
	render: function()
	{
		return(
			<div className="row">
			{
				this.props.videos.map(function(video, index)
				{
					return(
						<Video video={video} key={index} />
					)
				})
			}
			</div>
		);
	}
});

module.exports = VideoList;