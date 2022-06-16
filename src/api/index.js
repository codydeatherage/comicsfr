import axios from 'axios'

console.log(process.env.REACT_APP_AXIOS_URL);
const api = axios.create({
    baseURL: process.env.REACT_APP_AXIOS_URL,
})

/* export const createAccount = payload => api.post('/signup', payload)
export const login = payload => api.post('/login', payload)
export const searchVolumes = volume => api.get(`/search/volume/${volume}`) */

export const uploadIssue = payload => api.post('/issues', payload);
const apis = {
    uploadIssue
}

export default apis