goog.provide('App');
goog.provide('App.init');
goog.require('App.components.TodoList');
goog.require('App.components.todoList.Todo');
goog.require('App.components.todoList.TodoCollection');
goog.require('goog.ui.IdGenerator');


/**
* inits the whole application
*/
App.init = function() {
  //generator of IDs
  var generator = new goog.ui.IdGenerator();
  var container = document.getElementById('container');
  var collection = new App.components.todoList.TodoCollection(generator);
  /////////////////////////// example data /////////////////////////////////////
  var todo = new App.components.todoList.Todo(generator.getNextUniqueId(),
      'Wash the car', false);
  var todo2 = new App.components.todoList.Todo(generator.getNextUniqueId(),
      'go out', false);
  var todo3 = new App.components.todoList.Todo(generator.getNextUniqueId(),
      'program the rest of it', false);
  //////////////////////////////////////////////////////////////////////////////
  collection.add_todo(todo);
  collection.add_todo(todo2);
  collection.add_todo(todo3);
  var todoForm = new App.components.TodoList('Add', container, collection);
  todoForm.render();
};
goog.exportSymbol('App.init', App.init);
