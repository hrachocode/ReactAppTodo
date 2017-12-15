var React = require('react');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var ToDoList = require('ToDoList');
var ToDo = require('ToDo');

describe('ToDoList', () => {
  it('should Exists', () => {
    expect(ToDoList).toExist(['YES! Exists']);
  });

  it('Should count rendered components with the objects length written above', () => {
    var todos = [
       {id: 1, text:"Shit testing"},{id: 2, text:"Shit testing 2"}
    ];

    var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>)
    var todosComponents = TestUtils.scryRenderedComponentsWithType(toDoList, ToDo);  
  
    expect(todosComponents.length).toBe(todos.length);
  })
});
