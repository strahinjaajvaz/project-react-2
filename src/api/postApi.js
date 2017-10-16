import { url, headers } from './common/commonApi'

export const getAllPosts = () => {
  return fetch(`${url}/posts`, {headers: headers})
    .then((res) => { return (res.json()) })
}

export const addPost = (post) => {
  return fetch(`${url}/posts`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify(post)
  }).then(res => console.log(res))
}