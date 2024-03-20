import IdeasApi from "../services/ideasApi";
import IdeaList from "./IdeaList";

class IdeaForm {
  constructor() {
    this._formModal = document.querySelector('#modal');
    this._ideaList = new IdeaList
    this._user = ''
  }

  addEventListeners() {
    this._form.addEventListener('submit', this.handleSubmit.bind(this))
  }

  async handleSubmit(e) {
    e.preventDefault();
    // save username to local storage
    const savedUser = this._user !== '' ? this._user : document.querySelector('#username').value;
    localStorage.setItem('username', savedUser);
    const idea = {
      username: savedUser,
      text: document.querySelector('#idea-text').value,
      tag: document.querySelector('#tag').value,
    }
    this._form.reset();
    document.dispatchEvent(new Event('closemodal'));
    //  Add idea to server
    const newIdea = await IdeasApi.createIdea(idea);
    // Add idea to dom
    this._ideaList.addIdeaToList(newIdea.data.newIdea);
  }

  render(){
    if(!localStorage.getItem('username')){
      this._user = ''
    } else {
      this._user = localStorage.getItem('username')
    }
    this._formModal.innerHTML = `<div id="form-modal" class="modal-box">
      <form id="idea-form">
        <div class="form-control">
          <label for="idea-text">Enter a Username</label>
          <input required type="text" name="username" id="username" value=${this._user} ${this._user && 'disabled=true'} ></input>
        </div>
        <div class="form-control">
          <label for="idea-text">What's Your Idea?</label>
          <textarea required name="text" id="idea-text"></textarea>
        </div>
        <div class="form-control">
          <label for="tag">Tag</label>
          <input required type="text" name="tag" id="tag" />
        </div>
        <button class="btn" type="submit" id="submit">Submit</button>
      </form>
    </div>`
    this._form = document.querySelector('#idea-form');
    this.addEventListeners();
  }

}

export default IdeaForm;