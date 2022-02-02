import axios from 'axios'
import { useSelector } from 'react-redux'

// TODO: add token to every request to the server

class ApiService {
  API_ENDPOINT = 'http://localhost:8000'

  async performRegister(name, password) {
    const bodyFormData = new FormData()
    bodyFormData.append('username', name)
    bodyFormData.append('password', password)

    const response = await axios.post(`${this.API_ENDPOINT}/register`, bodyFormData)

    return response
  }

  async performLogin(name, password) {
    const bodyFormData = new FormData()
    bodyFormData.append('username', name)
    bodyFormData.append('password', password)

    const response = await axios.post(`${this.API_ENDPOINT}/token`, bodyFormData)

    return response.data.access_token
  }

  async getCharacters(queryParams) {
    const response = await axios.get(`${this.API_ENDPOINT}/characters`, {
      // headers: {
      //  Bearer: token
      // },
      params: queryParams
    })

    return response.data.data.results
  }

  async getCharacter(id) {
    const response = await axios.get(`${this.API_ENDPOINT}/characters/${id}`)

    return response.data
  }

  async getComics(queryParams) {
    const response = await axios.get(`${this.API_ENDPOINT}/comics`, { params: queryParams })

    return response.data.data.results
  }

  async getComic(id) {
    const response = await axios.get(`${this.API_ENDPOINT}/comics/${id}`)

    return response.data
  }
}

const apiService = new ApiService()
export default apiService
