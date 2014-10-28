/** @jsx React.DOM */
goog.provide('App.ui.atomic.Input');
App.ui.atomic.Input = React.createClass({
  /**
  * Property types
  */
  propTypes: {
    value: React.PropTypes.string
  },
  /**
  * default values of the properties
  */
  getDefaultProps: function(){
    return {
      value: ""
    };
  },
  /**
  * render the element
  */
  render: function() {
    return(
        <input type="text" value={this.props.value}/>
    );
  }
});