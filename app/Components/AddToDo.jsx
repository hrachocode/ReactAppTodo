var React = require('react');

var AddToDo = React.createClass({
    handleButtonClick: function(e){
      e.preventDefault();

      var task = this.refs.task.value;
      if(typeof task === 'string' && task.length > 0){
        this.refs.task.value = '';
        this.props.onAddTodo(task);
      }else{
        this.refs.task.focus();
      }
    },
    render: function(){
    return (
        <div>
          <form onSubmit={this.handleButtonClick}>
            <input ref="task" type="text"/>
            <button className='button'>Add Todo</button>
          </form>  
          </div>
      )
  }
});

module.exports = AddToDo;