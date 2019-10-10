var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var Video = createReactClass(
{	
	render: function()
	{
		var link = "https://www.youtube.com/embed/" + this.props.video.video_id;
		return(
			<div className="c4">
				<h5>
					{this.props.video.title}
					<span className="delete">
						<a href="#" onClick={this.handleClick.bind(this, this.props.video.id)}>X</a>
					</span>
				</h5>
				
				<iframe width="360" height="285" src={link} frameBorder="0" allowFullScreen 
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
				<p>{this.props.video.description}</p>
			</div>
		);
	},

	handleClick: function(i, j)
	{
		AppActions.removeVideo(i);
	}
});

module.exports = Video;