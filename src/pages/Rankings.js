import React, { Component } from 'react'
import {connect} from 'react-redux';
import { increment, decrement,reset,add,minus } from '../redux/ducks/counter'

class Rankings extends Component {
  state = {
    val: 0,
  }
  handlChange = (event) => {
    this.setState({val: event.target.value})
  }
  handleAdd = () => {
    this.props.add(this.state.val)
  }
  handleMinus = () => {
    this.props.minus(this.state.val)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1> { this.props.count } </h1>
        <button onClick={this.props.increment} >+</button>
        <button onClick={this.props.decrement} >-</button>
        <button onClick={this.props.reset} >0</button>
        <input type = 'number' value={this.state.val} onChange={this.handlChange} />
        <button  onClick={this.handleMinus}>-</button>
        <button  onClick={this.handleAdd}>+</button>
        <br></br>
        <select  value={this.state.value} onChange={this.handleChange}>
            <option value="1">Grapefruit</option>
            <option value="2">Lime</option>
            <option value="3">Coconut</option>
            <option value="4">Mango</option>
        </select>
        <input type='file'/> 
        </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    count: state.count,
  }
}
const mapDispatchToProps = { increment, decrement, reset,add,minus}

export default connect(mapStateToProps, mapDispatchToProps)(Rankings)