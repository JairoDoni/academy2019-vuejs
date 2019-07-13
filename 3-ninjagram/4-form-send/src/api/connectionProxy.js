import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:8000',
  // se nao der resposta em 10 segundos é tratado como erro
  timeout: 10000
})

export default instance
