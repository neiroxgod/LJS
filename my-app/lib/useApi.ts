import axios from 'axios'

export const useApi = () => {
  const baseURL = 'https://127.0.0.1:3000'

  return axios.create({
    baseURL
  })
}