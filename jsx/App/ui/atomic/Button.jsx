/** @jsx React.DOM */
goog.provide('App.ui.atomic.Button');
App.ui.atomic.Button = React.createClass({
  /**
  * Property types
  */
  propTypes: {
    label: React.PropTypes.string,
    click: React.PropTypes.func
  },
  /**
  * default values of the properties
  */
  getDefaultProps: function(){
    return {
      label: "",
      click: function(){console.log('no action defined')}
    };
  },
  /**
  * render the element
  */
  render: function() {
    return(
        <button onClick={this.props.click}>{this.props.label}</button>
    );
  }
});