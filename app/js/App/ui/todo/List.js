/** @jsx React.DOM */
goog.provide('App.ui.todo.List');
goog.require('App.ui.todo.ListItem');
App.ui.todo.List = React.createClass({displayName: 'List',
  
  /**
  * Property types
  */
  propTypes: {
    todos: React.PropTypes.array
  },

  /**
  * default values of the properties
  */
  getDefaultProps: function(){
    return {
      todos: []
    };
  },

  /**
  * render the element
  */
  render: function() {
    var todos = [];
    var listItem = React.createFactory(App.ui.todo.ListItem);
    this.props.todos.forEach(function(elem){
      todos.push(listItem({todo: elem, key: elem.id}));
    });
    return(
      React.DOM.ul(null, 
        todos
      )
    );
  }
});