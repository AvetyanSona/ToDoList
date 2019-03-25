const initialState = 0

// action
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const ADD = 'ADD'
const MINUS = 'MINUS'

// action creater

export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})
export const reset = () => ({type: RESET})
export const add = (num) => ({type:ADD, payload: num})
export const minus = num => ({type:MINUS, payload: num})

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case INCREMENT: return state + 1
  case DECREMENT: return state - 1
  case RESET: return 0
  case ADD: return state + +payload   
  case MINUS: return state - +payload
  default:
    return state
  }
}

