import { ADD_CATEGORY, ADD_POST } from '../actions/index'
import { combineReducers } from 'redux'

function cats(state = { cats: [] }, action) {
  switch (action.type) {
    case ADD_CATEGORY: {
      console.log(state.cats.type)
      return { cats: state.cats.push(action.cats) }
    }
    default:
      return state
  }
}

function posts(state = { posts: [] }, action) {
  switch (action.type) {
    case ADD_POST: {
      return Object.assign({}, { ...state }, { posts: [...state.posts, action.posts]})
    }
    default:
      return state
  }
}

export default combineReducers({
  cats,
  posts
})