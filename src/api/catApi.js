import { url, header } from './common/commonApi'

export const getAllCategories = () => {
  return fetch(`${url}/categories`, header)
    .then((res) => { return (res.json()) })
}