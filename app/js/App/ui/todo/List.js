/** @jsx React.DOM */
goog.provide('App.ui.todo.List');
App.ui.todo.List = React.createClass({displayName: 'List',
  /**
  * Property types
  */
  propTypes: {
  },
  /**
  * default values of the properties
  */
  getDefaultProps: function(){
    return {
    };
  },
  /**
  * render the element
  */
  render: function() {
    return(
      React.DOM.ul(null, 
        React.DOM.li(null, "I am a todo")
      )
    );
  }
});