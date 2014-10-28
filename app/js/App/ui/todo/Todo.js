/** @jsx React.DOM */
goog.provide('App.ui.todo.Todo');
goog.require('App.ui.todo.AddForm');
goog.require('App.ui.todo.List');
App.ui.todo.Todo = React.createClass({displayName: 'Todo',
  /**
  * Property types
  */
  propTypes: {
    label: React.PropTypes.string,
    add_new_todo: React.PropTypes.func
  },
  /**
  * default values of the properties
  */
  getDefaultProps: function(){
    return {
      label: "",
      add_new_todo: function(){console.log('no action defined')}
    };
  },
  /**
  * render the element
  */
  render: function() {
    return(
      React.DOM.div(null, 
        App.ui.todo.AddForm({label: this.props.label, add_new_todo: this.props.add_new_todo}), 
        App.ui.todo.List(null)
      )
    );
  }
});