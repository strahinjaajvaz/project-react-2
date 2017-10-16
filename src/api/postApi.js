import { url, header } from './common/commonApi'

export const getAllPosts = () => {
  return fetch(`${url}/posts`, header)
    .then((res) => { return (res.json()) })
}

export const addPost = (post) => {
  return fetch(`${url}/posts`, {
    method: 'POST',
    headers: {
      ...header
    },
    body: JSON.stringify(post)
  }).then(res => console.log(res))
}