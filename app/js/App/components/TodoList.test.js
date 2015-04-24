goog.require('App.components.TodoList');

describe('todo component', function() {

  var todo;

  beforeEach(function() {
    todo = new App.components.TodoList('Send');
  });

  it('should save the name of the button in constructor', function() {
    expect(todo.label).toBe('Send');
  });

});
