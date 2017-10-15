export const GET_CATEGORIES = `GET_CATEGORIES`
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

export function addComment(coms){
  return {
    type: ADD_COMMENT,
    coms
  }
}