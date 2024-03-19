import axios from 'axios'


class IdeasApi {
  constructor() {
    this._apiUrl = 'http://localhost:5000/api/ideas';
  }

  async getIdeas() {
    return axios.get(this._apiUrl)
      .then(res => res.json())
  }
}

export default IdeasApi;