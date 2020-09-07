import { combineReducers } from 'redux'
import guestReducers from './guestReducers'
import mainReducers from './mainReducers'
import { HomeReducer } from '../pages/Home/Home.reducer' 

export default combineReducers({
  guestReducers,
  mainReducers,
  HomeReducer
})