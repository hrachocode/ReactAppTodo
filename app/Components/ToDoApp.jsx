var React = require("react");
var TodoList = require("TodoList");

var ToDoApp = React.createClass({
  getInitialState(){
    return {
        todos: [
          {
            id: 1,
            text: "Clean Yard"
          }, {
            id: 2,
            text: "Wals the Dog"
          }, {
            id: 3,
            text: "Fuck the Life"
          }, {
            id: 4,
            text: "Fuck the Life Twice"
          }
        ]
      }
  },
  render: function(){
    var {todos} = this.state;
    return(
        <div>
          <TodoList todos={todos}/>
        </div>
    )}
})

module.exports = ToDoApp;