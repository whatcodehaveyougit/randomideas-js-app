import IdeasApi from "../services/ideasApi";

class IdeaForm {
  constructor() {
    this._formModal = document.querySelector('#modal');
  }

  addEventListeners() {
    this._form.addEventListener('submit', this.handleSubmit.bind(this))
  }

  async handleSubmit(e) {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const text = document.querySelector('#idea-text').value;
    const tag = document.querySelector('#tag').value;
    this._form.reset();
    document.dispatchEvent(new Event('closemodal'));
    await IdeasApi.createIdea({ username, text, tag });
    document.dispatchEvent(new Event('updateideas'));
  }

  render(){
    console.log('rendering')
    this._formModal.innerHTML = `<div id="form-modal" class="modal-box">
      <form id="idea-form">
        <div class="form-control">
          <label for="idea-text">Enter a Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div class="form-control">
          <label for="idea-text">What's Your Idea?</label>
          <textarea name="text" id="idea-text"></textarea>
        </div>
        <div class="form-control">
          <label for="tag">Tag</label>
          <input type="text" name="tag" id="tag" />
        </div>
        <button class="btn" type="submit" id="submit">Submit</button>
      </form>
    </div>`
    this._form = document.querySelector('#idea-form');
    this.addEventListeners();
  }

}

export default IdeaForm;