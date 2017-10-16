import { url, headers } from './common/commonApi'

export const getAllCategories = () => {
  return fetch(`${url}/categories`, {headers: headers})
    .then((res) => { return (res.json()) })
}