goog.provide('App.components.todoList.Todo');



/**
* Object representation of the TodoForm
* @param {string} id
* @param {string} name
* @param {Boolean} done
* @constructor
*/
App.components.todoList.Todo = function(id, name, done) {
  this.id = id;
  this.name = name || '';
  this.done = done || false;
};


/**
* function returns ID of the todo
* @return {string}
*/
App.components.todoList.Todo.prototype.get_id = function() {
  return this.id;
};


/**
* function every component which has something to do with UI should have
*  @return {Object} interface for React props
*/
App.components.todoList.Todo.prototype.to_react = function() {
  return {
    'id' : this.id,
    'name' : this.name,
    'done' : this.done
  };
};

