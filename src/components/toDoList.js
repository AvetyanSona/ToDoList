import React from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import {List} from '@material-ui/core';
import '../App.css';
import TaskInput from '../components/TaskInput'
import Checkbox from '@material-ui/core/Checkbox';


  export default class ToDoList extends React.Component {
    state = {
      value:'',
    }

  handleDelete(event) {
    this.props.deleteToDoTask(event)
  }
  handleComplete=(event)=>{
    this.props.completeToDoTask(event)
  }
     render() { 
      //console.log(this.props)
      return (
        <div>
          <List>
          {this.props.todos.map(( task, index )=>{
            return (<div className='listStyle' key={index} >
                      <Checkbox  onChange={()=>{this.handleComplete(task.id)}} />
                      <TaskInput value={task.text} id={task.id} changeToDoTask={this.props.changeToDoTask}/>
                      <Fab  aria-label="Delete" color="secondary" onClick={()=>this.handleDelete(task.id)} >
                        <DeleteIcon />
                      </Fab>
                    </div>         
              )            
            })}
          </List>
        </div>
      )
    }
  }

