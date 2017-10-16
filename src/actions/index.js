export const GET_CATEGORIES = `GET_CATEGORIES`
export const ADD_POST = `ADD_POST`
export const EDIT_POST = `EDIT_POST`
export const GET_POSTS = `GET_POSTS`
export const ADD_COMMENT = `ADD_COMMENT`

export function getCategoties(cats){
  return {
    type: GET_CATEGORIES,
    cats
  }
}

export function getPosts(posts){
  return {
    type: GET_POSTS,
    posts
  }
}

export function addPost(post){
  return{
    type: ADD_POST,
    post
  }
}

export function editPost(post){
  return {
    type: EDIT_POST,
    post
  }
}

export function addComment(coms){
  return {
    type: ADD_COMMENT,
    coms
  }
}
