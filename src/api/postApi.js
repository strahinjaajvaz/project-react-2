import { url, header } from './common/commonApi'

export const getAllPosts = () => {
  return fetch(`${url}/posts`, header)
    .then((res) => { return (res.json()) })
}