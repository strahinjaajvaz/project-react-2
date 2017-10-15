import { GET_CATEGORIES, GET_POSTS, ADD_COMMENT } from '../actions/index'
import { combineReducers } from 'redux'

function cats(state = {cats: []}, action) {
  switch (action.type) {
    case GET_CATEGORIES: {
      return {...state, cats: [...state['cats'], ...action.cats]}
    }
    default:
      return state
  }
}

function posts(state = {posts: []}, action) {
  switch (action.type) {
    case GET_POSTS: 
      return  {...state, posts: [...state['posts'], ...action.posts]}
    default:
      return state
  }
}
function coms(state={}, action){
  switch(action.type){
    case ADD_COMMENT:
      return {...state, coms: [...state['coms'], action.coms]}
    default: 
    return state
  }
}

export default combineReducers({
  cats,
  posts,
  coms
})