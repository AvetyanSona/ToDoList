import { combineReducers } from 'redux'

import user from './ducks/auth'
import count from './ducks/counter'
import todo from './ducks/todo'

export default combineReducers({
    user,
    count,
    todo
})