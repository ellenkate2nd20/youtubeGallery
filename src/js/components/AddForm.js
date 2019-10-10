var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var AddForm = createReactClass(
{	
	render: function()
	{
		return(
			<div className="add-form">
				<div className="c12 panel panel-default">
					<h3>Add Video</h3>

					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>Video Title</label>
							<br/>
							<input type="text" className="form-control" ref="title" />
						</div>

						<div className="form-group">
							<label>Video ID</label>
							<br/>
							<input type="text" className="form-control" ref="video_id" />
						</div>

						<div className="form-group">
							<label>Video Description</label>
							<br/>
							<textarea className="form-control" ref="description"></textarea>
						</div>

						<button type="submit" className="button">Add</button>
					</form>
				</div>
			</div>
		);
	},

	handleSubmit: function(e)
	{
		e.preventDefault();

		var video = 
		{
			title: this.refs.title.value.trim(),
			video_id: this.refs.video_id.value.trim(),
			description: this.refs.description.value.trim()
		};

		AppActions.addVideo(video);
	}
});

module.exports = AddForm;