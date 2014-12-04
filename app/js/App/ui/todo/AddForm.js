/** @jsx React.DOM */
goog.provide('App.ui.todo.AddForm');
goog.require('App.ui.atomic.Button');
goog.require('App.ui.atomic.Input');
App.ui.todo.AddForm = React.createClass({displayName: 'AddForm',
  
  /**
  * Property types
  */
  propTypes: {
    label: React.PropTypes.string,
    add_new_todo: React.PropTypes.func,
    reload_todos: React.PropTypes.func
  },

  /**
  * default values of the properties
  */
  getDefaultProps: function(){
    return {
      label: "",
      add_new_todo: function(){return false;},
      reload_todos: function(){return false;}
    };
  },

  /**
  * collects the information about the new todo,
  * passes it to the models and then when it is saved reloads the todos
  * in the parent component, so the new one is shown in the list
  */
  collect_new_todo_info: function(){
    var new_todo = {};
    new_todo.name = this.refs.name.refs.value.getDOMNode().value;
    this.refs.name.refs.value.getDOMNode().value = "";
    if(new_todo.name){
      this.props.add_new_todo(new_todo);
      this.props.reload_todos();
    }
  },

  /**
  * render the element
  */
  render: function() {
    var input = React.createFactory(App.ui.atomic.Input);
    var button = React.createFactory(App.ui.atomic.Button);
    return(
      React.DOM.div(null, 
        input({ref: 'name'}), 
        button({label: this.props.label, click: this.collect_new_todo_info})
      )
    );
  }
});