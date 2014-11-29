/** @jsx React.DOM */
goog.provide('App.ui.todo.ListItem');
App.ui.todo.ListItem = React.createClass({displayName: 'ListItem',
  
  /**
  * Property types
  */
  propTypes: {
    todo: React.PropTypes.object
  },
  
  /**
  * default values of the properties
  */
  getDefaultProps: function(){
    return {
      todo: {name: ""}
    };
  },

  /**
  * render the element
  */
  render: function() {
    return(
      React.DOM.li(null, this.props.todo.name)
    );
  }
});