/** @jsx React.DOM */
goog.provide('App.ui.todo.List');
goog.require('App.ui.todo.ListItem');
App.ui.todo.List = React.createClass({displayName: 'List',
  
  /**
  * Property types
  */
  propTypes: {
    todos: React.PropTypes.func
  },

  /**
  * default values of the properties
  */
  getDefaultProps: function(){
    return {
      todos: function(){return false;}
    };
  },

  /**
  * return the initial state of the component
  */
  getInitialState: function(){
    return {"todos" : []};
  },
  
  /**
  * add the todos after the component is mounted
  */
  componentDidMount: function(){
    this.setState({todos: this.props.todos()})
  },

  /**
  * render the element
  */
  render: function() {
    var todos = [];
    this.state.todos.forEach(function(elem){
      todos.push(App.ui.todo.ListItem({todo: elem}));
    });
    return(
      React.DOM.ul(null, 
        todos
      )
    );
  }
});