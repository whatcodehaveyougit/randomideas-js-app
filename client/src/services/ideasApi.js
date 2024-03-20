import axios from 'axios'
class IdeasApi {
  constructor() {
    this._apiUrl = 'http://localhost:5000/api/ideas';
  }

  async getIdeas() {
    return axios.get(this._apiUrl);
  }

  async createIdea(data){
    return axios.post(this._apiUrl, data);
  }
}

// Very cool just initialsing is here!
export default new IdeasApi();