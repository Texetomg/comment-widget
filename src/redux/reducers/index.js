import { combineReducers } from 'redux'
import comments from './comments'
import userInfo from './userInfo'

export default combineReducers({ comments, userInfo })
