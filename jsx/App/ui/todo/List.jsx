/** @jsx React.DOM */
goog.provide('App.ui.todo.List');
App.ui.todo.List = React.createClass({
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
      <ul>
        <li>I am a todo</li>
      </ul>
    );
  }
});