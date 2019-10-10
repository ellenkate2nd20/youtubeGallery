var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

var AddForm = require('./AddForm.js');
var VideoList = require('./VideoList.js');

function getAppState()
{
	return {
		videos: AppStore.getVideos()
	}
}

var App = createReactClass(
{	
	getInitialState: function()
	{
		return getAppState();
	},

	_onChange: function()
	{
		this.setState(getAppState());
	},

	componentDidMount: function()
	{
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function()
	{
		AppStore.removeChangeListener(this._onChange);
	},

	render: function()
	{
		return(
			<div>
				<AddForm />
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
});

module.exports = App;