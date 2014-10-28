/** @jsx React.DOM */
goog.provide('App.ui.atomic.Input');
App.ui.atomic.Input = React.createClass({displayName: 'Input',
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
        React.DOM.input({type: "text", value: this.props.value})
    );
  }
});