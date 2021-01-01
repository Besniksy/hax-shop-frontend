import axios from 'axios'
import { api } from '../urlConfig'

let token;
if (typeof window !== "undefined") {

    token = localStorage.getItem('token')
    
    }

const axiosInstance = axios.create({
            baseURL: api,
            headers: {
                'Authorization': token ? `Bearer ${token}` : ''
            }
        
        })
    


export default axiosInstance