import axios from 'axios'


const api = axios.create({
    baseURL: 'https://rocky-temple-75040.herokuapp.com/',
})

//Es generalizable a cualquier cosa, en vez de user pongo otra cosa


export const getData = () => api.get(`/api`)


const apis = {
    getData,
}

export default apis;