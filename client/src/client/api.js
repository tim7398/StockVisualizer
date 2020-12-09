import axios from 'axios'

export function getPortfolio() {
    return axios.get('http://localhost:8081/profile?id=3e575d69-88ed-4d5f-a1fb-16ab35e36405').then(response =>{
        return response.data
    })
}
