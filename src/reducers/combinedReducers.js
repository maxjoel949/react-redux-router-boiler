import { combineReducers } from 'redux'
import guestReducers from './guestReducers'
import mainReducers from './mainReducers'
import { HomeReducer } from '../pages/Home/Home.reducer' 
import articlesReducer from '../pages/Articles/Articles.reducer'

export default combineReducers({
  guestReducers,
  mainReducers,
  HomeReducer,
  articlesReducer
})