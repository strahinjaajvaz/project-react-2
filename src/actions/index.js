export const ADD_CATEGORY = `ADD_CATEGORY`
export const ADD_POST = `ADD_POST`

export function addCategories(cats){
  return {
    type: ADD_CATEGORY,
    cats
  }
}

export function addPosts(posts){
  return {
    type: ADD_POST,
    posts
  }
}