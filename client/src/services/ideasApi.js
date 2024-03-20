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

  async updateIdea(data){
    return axios.put(`${this._apiUrl}/${data.id}`, data);
  }

  deleteIdea(id){
    const username = localStorage.getItem('username') ? localStorage.getItem('username') : ''
    console.log(username + 'sending it here')

    return axios.delete(`${this._apiUrl}/${id}`, {
      data: {
        username
      }
    });
  }
}

// Very cool just initialsing is here!
export default new IdeasApi();