import axios from 'axios'

// TODO: add token to every request to the server

function getAuthorizationHeaders(token) {
  return {
    Authorization: `Bearer ${token}`
  }
}

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

  async getCharacters(queryParams, token) {
    const response = await axios.get(`${this.API_ENDPOINT}/characters`, {
      headers: getAuthorizationHeaders(token),
      params: queryParams
    })

    return response.data.data.results
  }

  async getCharacter(id, token) {
    const response = await axios.get(`${this.API_ENDPOINT}/characters/${id}`, {
      headers: getAuthorizationHeaders(token)
    })

    return response.data
  }

  async getComics(queryParams, token) {
    const response = await axios.get(`${this.API_ENDPOINT}/comics`, {
      params: queryParams,
      headers: getAuthorizationHeaders(token)
    })

    return response.data.data.results
  }

  async getComic(id, token) {
    const response = await axios.get(`${this.API_ENDPOINT}/comics/${id}`, {
      headers: getAuthorizationHeaders(token)
    })

    return response.data
  }

  async toggleBookmark(id, token) {
    await axios.post(`${this.API_ENDPOINT}/bookmark/characters/${id}`, {}, { headers: getAuthorizationHeaders(token) })
  }
}

const apiService = new ApiService()
export default apiService
