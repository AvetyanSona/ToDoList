import React, { Component } from 'react';
import {connect} from 'react-redux';
import ToDoList from '../components/toDoList';
import { addToDoTask, deleteToDoTask,changeToDoTask,completeToDoTask } from '../redux/ducks/todo'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export  class Messaging extends Component {
  state = {
    value:''
  }
handleChange = (event) => {
    this.setState ({
      value:event.target.value
    })
  }

handleAdd = (event) => {
  event.preventDefault();
  (this.state.value) ? this.props.addToDoTask(this.state.value): alert('Fill Field')
}


  render() {
    let toDoListProps = 
    {
      todos:this.props.todos,
      deleteToDoTask:this.props.deleteToDoTask,
      handleChange:this.handleChange,
      changeToDoTask:this.props.changeToDoTask,
      completeToDoTask:this.props.completeToDoTask
    }
    
    return (
      <>
        <form>
          <TextField  value={this.state.value} onChange={this.handleChange} />
          <Button  onClick={this.handleAdd} color="primary" >Add</Button>
          <ToDoList {...toDoListProps} ></ToDoList>
        </form>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos:state.todo
  }
}

const mapDispatchToProps = {addToDoTask, deleteToDoTask,changeToDoTask,completeToDoTask}
export default connect(mapStateToProps,mapDispatchToProps)(Messaging)
