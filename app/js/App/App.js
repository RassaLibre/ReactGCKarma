goog.provide('App');
goog.require('App.core.todo.Todo');

/**
* inits the whole application
*/
App.init = function(){
  console.log('init');
  var container = document.getElementById('container');
  var todoForm = new App.core.todo.Todo('Add', container);
  todoForm.render();
};