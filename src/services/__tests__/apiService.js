import axios from 'axios'
import apiService from '../apiService'

jest.mock('axios')

describe('apiService', () => {
  it('performRegister', async () => {
    axios.post.mockResolvedValueOnce({})
    await apiService.performRegister('name', 'password')

    expect(axios.post).toBeCalled()
  })

  it('performLogin', async () => {
    axios.post.mockResolvedValueOnce({ data: { access_token: 'token' } })
    await apiService.performLogin('name', 'password')

    expect(axios.post).toBeCalled()
  })

  it('getCharacters', async () => {
    axios.get.mockResolvedValueOnce({ data: { data: { results: [] } } })
    await apiService.getCharacters({}, 'token')

    expect(axios.get).toBeCalled()
  })

  it('getCharacter', async () => {
    axios.get.mockResolvedValueOnce({ data: [] })
    await apiService.getCharacter('1', 'token')

    expect(axios.get).toBeCalled()
  })

  it('getComics', async () => {
    axios.get.mockResolvedValueOnce({ data: { data: { results: [] } } })
    await apiService.getComics({}, 'token')

    expect(axios.get).toBeCalled()
  })

  it('getComic', async () => {
    axios.get.mockResolvedValueOnce({ data: [] })
    await apiService.getComic('1', 'token')

    expect(axios.get).toBeCalled()
  })

  it('toggleBookmark', async () => {
    await apiService.toggleBookmark('1', 'token')

    expect(axios.post).toBeCalled()
  })
})
