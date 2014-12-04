/** @jsx React.DOM */
goog.provide('App.ui.Todo');
goog.require('App.ui.todo.AddForm');
goog.require('App.ui.todo.List');
App.ui.Todo = React.createClass({displayName: 'Todo',
  
  /**
  * Property types
  */
  propTypes: {
    label: React.PropTypes.string,
    add_new_todo: React.PropTypes.func,
    todos: React.PropTypes.func
  },

  /**
  * default values of the properties
  */
  getDefaultProps: function(){
    return {
      label: "",
      add_new_todo: function(){return false;},
      todos: function(){return false;}
    };
  },

  /**
  * add the todos after the component is mounted
  */
  componentDidMount: function(){
    this.load_todos();
  },

  /**
  * loads the Todos from the models
  */
  load_todos: function(){
    this.setState({todos: this.props.todos()});
  },

  /**
  * return the initial state of the component
  */
  getInitialState: function(){
    return {"todos" : []};
  },
  
  /**
  * render the element
  */
  render: function() {
    var addFrom = React.createFactory(App.ui.todo.AddForm);
    var list = React.createFactory(App.ui.todo.List);
    return(
      React.DOM.div(null, 
        addFrom({label: this.props.label, add_new_todo: this.props.add_new_todo, reload_todos: this.load_todos}), 
        list({todos: this.state.todos})
      )
    );
  }
});