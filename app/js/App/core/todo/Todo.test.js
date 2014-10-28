goog.require('App.core.todo.Todo');

describe('todo component', function(){

  var todo;

  beforeEach(function(){
    todo = new App.core.todo.Todo('Send');
  });

  it('should save the name of the button in constructor', function(){
    expect(todo.label).toBe('Send');
  });

});