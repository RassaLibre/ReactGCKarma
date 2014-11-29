goog.provide('App.components.TodoList');
goog.require('App.ui.Todo');



/**
* Object representation of the TodoForm
* @param {string} label of the button in the form
* @param {Object} parent to which the form shall be rendered
* @param {App.components.todoList.TodoCollection} collection to which the form
*   shall be rendered
* @constructor
*/
App.components.TodoList = function(label, parent, collection) {
  this.label = label || '';
  this.parent = parent || document.getElementById('container');

  /**
  * List of todos
  * @type {Array}
  */
  this.todos = collection;
};


/**
* renders the form into the parent element
*/
App.components.TodoList.prototype.render = function() {
  React.renderComponent(App.ui.Todo(this.to_react()), this.parent);
};


/**
* shows a dummy message
*/
App.components.TodoList.prototype.add_new_todo = function() {
  console.log('a req to the server to save the TODO');
};


/**
* function every component which has something to do with UI should have
*  @return {Object} interface for React props
*/
App.components.TodoList.prototype.to_react = function() {
  return {
    'label' : this.label,
    'add_new_todo' : this.add_new_todo.bind(this),
    'todos' : this.todos.to_react.bind(this.todos)
  };
};
