var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var AddToDo = require('AddToDo');


describe('AddToDo', () => {
  it('should Exists', () => {
    expect(AddToDo).toExist(['YES! Exists']);
  });

  it('Should accept if Valid adata entered', () => {
    var checkTask = 'check mail';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddToDo onAddTodo={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.task.value = checkTask;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(checkTask);
  })  

  it('Should not accept if Valid adata entered', () => {
    var checkTask = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddToDo onAddTodo={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.task.value = checkTask;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(checkTask);
  })
});