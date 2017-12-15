var React = require('react');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
  it('should Exists', () => {
    expect(ToDoApp).toExist(['YES! Exists']);
  });
});
