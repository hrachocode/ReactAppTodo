var React = require('react');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var ToDo = require('ToDo');

describe('ToDo', () => {
  it('should Exists', () => {
    expect(ToDo).toExist(['YES! Exists']);
  });
});
