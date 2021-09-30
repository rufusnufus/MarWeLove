import axios from 'axios'

class ApiService {
  API_ENDPOINT = 'http://localhost:8000'

  async getCharacters(query) {
    const response = await axios.get(`${this.API_ENDPOINT}/characters/${query || ''}`)

    return response.data.data.results
  }

  async getCharacter(id) {
    const response = await axios.get(`${this.API_ENDPOINT}/character/${id}`)

    return response.data
  }

  async getComics(query) {
    const response = await axios.get(`${this.API_ENDPOINT}/comics/${query || ''}`)

    return response.data.data.results
  }

  async getComic(id) {
    const response = await axios.get(`${this.API_ENDPOINT}/comic/${id}`)

    return response.data
  }
}

const apiService = new ApiService()

export default apiService
