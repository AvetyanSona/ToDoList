
//action
let toDoId = 0;
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const CHANGE_TODO = 'CHANGE_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';

//action creator
export const addToDoTask = text => ({ type: ADD_TODO, payload: text,id:toDoId++ })
export const deleteToDoTask = id => ({ type: DELETE_TODO, payload: id })
export const changeToDoTask = (text,id) => ({ type: CHANGE_TODO, payload: text,toDoId:id })
export const completeToDoTask = (id) => ({ type: COMPLETE_TODO, payload: id })


const initialState = []
export default (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
  case ADD_TODO:
    return [
      ...state,
      {
        id:action.id,
        text:action.payload,
        completed:false
      }
    ]
  case DELETE_TODO:
    return state.filter(task => task.id !== action.payload)
  case CHANGE_TODO:
    return state.map(task => task.id === action.toDoId ? {...task,text:action.payload}:task)
  case COMPLETE_TODO:
    return state.map(task => task.id === action.payload ? {...task,completed:!task.completed}:task) 
  default:
    return state
  }
}

