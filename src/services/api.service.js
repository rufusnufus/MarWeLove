import axios from 'axios'

class ApiService {
  API_ENDPOINT = 'http://localhost:8000'

  async getCharacters() {
    const response = await axios.get(`${this.API_ENDPOINT}/characters/`)

    return response.data.data.results
  }

  async getCharacter(id) {
    const response = await axios.get(`${this.API_ENDPOINT}/characters/${id}`)

    return response.data
  }

  async getComics() {
    const response = await axios.get(`${this.API_ENDPOINT}/comics/`)

    return response.data.data.results
  }

  async getComic(id) {
    const response = await axios.get(`${this.API_ENDPOINT}/comics/${id}`)

    return response.data
  }
}

const apiService = new ApiService()

export default apiService
