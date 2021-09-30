import axios from 'axios'

class ApiService {
  API_ENDPOINT = 'http://localhost:8000'

  async getCharacters(queryParams) {
    const response = await axios.get(`${this.API_ENDPOINT}/characters`, { params: queryParams })

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
