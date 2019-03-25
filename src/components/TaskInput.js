import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class TaskInput extends Component {
 constructor(props){
     super(props);
     this.state = {
         value: this.props.value,
         condition: "TEXT" // "INPUT"
     }

 }
 handleTransform = () => {
     const newCondition = this.state.condition === "TEXT" ? "INPUT" : "TEXT"
     this.setState({condition: newCondition})
 }
  handleUpdate = (event)=>{
      this.props.changeToDoTask(this.state.value,event)
       this.handleTransform()
  }
 handleTaskChange=(event)=>{
    this.setState({
        value:event.target.value
    })
  }
  render() {
    // console.log('props',this.props.id)
      const { condition } = this.state
    return (
      <div>
        {
         condition === "INPUT" ? 
         <>
         <TextField value={this.state.value} onChange={this.handleTaskChange}   />
         <Button color="primary"  onClick={()=>{this.handleUpdate(this.props.id)}} >Save</Button>
         </> 
         : 
         <h3 onClick={this.handleTransform}> {this.state.value} </h3>
        }
      </div>
    )
  }
}

TaskInput.propTypes = {
    value: PropTypes.string.isRequired
}

TaskInput.defaultProps = {

}