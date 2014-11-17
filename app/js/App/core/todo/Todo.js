goog.provide('App.core.todo.Todo');
goog.require('App.ui.todo.Component');



/**
* Object representation of the TodoForm
* @param {string} label of the button in the form
* @param {Object} parent to which the form shall be rendered
* @constructor
*/
App.core.todo.Todo = function(label, parent) {
  this.label = label || '';
  this.parent = parent || document.getElementById('container');
};


/**
* renders the form into the parent element
*/
App.core.todo.Todo.prototype.render = function() {
  React.renderComponent(App.ui.todo.Component(this.to_react()), this.parent);
};


/**
* shows a dummy message
*/
App.core.todo.Todo.prototype.add_new_todo = function() {
  console.log('a req to the server to save the TODO');
};


/**
* function every component which has something to do with UI should have
*  @return {Object} interface for React props
*/
App.core.todo.Todo.prototype.to_react = function() {
  return {
    'label' : this.label,
    'add_new_todo' : this.add_new_todo.bind(this)
  };
};
