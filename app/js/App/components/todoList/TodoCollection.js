goog.provide('App.components.todoList.TodoCollection');



/**
*
* @constructor
*/
App.components.todoList.TodoCollection = function() {
  this.todos = [];
};


/**
* adds Todo to the collection
* @param {App.components.todoList.Todo} todo
*/
App.components.todoList.TodoCollection.prototype.add_todo = function(todo) {
  this.todos.push(todo);
};


/**
* returns todo based on passed ID
* @param {string} id
* @return {?App.components.todoList.Todo}
*/
App.components.todoList.TodoCollection.prototype.get_todo_by_id = function(id) {
  for (var i = 0; i < this.todos.length; i++) {
    if (this.todos[i].get_id() === id) return this.todos[i];
  }
  return null;
};


/**
* function every component which has something to do with UI should have
*  @return {?Array} interface for React props
*/
App.components.todoList.TodoCollection.prototype.to_react = function() {
  if (this.todos.length <= 0) return null;
  else {
    var to_be_returned = [];
    for (var i = 0; i < this.todos.length; i++) {
      to_be_returned.push(this.todos[i].to_react());
    }
    return to_be_returned;
  }
};


