import IdeasApi from "../services/ideasApi";
class IdeaList {

  constructor() {
    this._ideaList = document.querySelector('#idea-list');
    this._ideas = [];
    this.getIdeas();
    this._validTags = new Set(['business', 'design', 'development', 'marketing']);
    document.addEventListener('closemodal', this.getIdeas.bind(this));
    this.addEventListeners()
  }

  addEventListeners(){
    this._ideaList.addEventListener('click', (e) => {
      if (e.target.classList.contains('fa-times')) {
        e.stopImmediatePropagation()
        this.deleteIdea(e)
      }
    })
  }

  async deleteIdea(e){
    const elementIdToBeDeleted = e.target.parentElement.parentElement.dataset.id;
    try {
      const res = await IdeasApi.deleteIdea(elementIdToBeDeleted)
      this._ideas = this._ideas.filter(idea => idea._id !== elementIdToBeDeleted)
      this.getIdeas();
    } catch (error) {
      console.log(error)
    }
  }

  // ReferenceError: regeneratorRuntime is not defined
  // Causing this error because we are using async await syntax

  async getIdeas() {
    try {
      const res = await IdeasApi.getIdeas();
      this._ideas = res.data.ideas;
      this.render()
    } catch (error) {
      console.log(error)
    }
  }

  addIdeaToList(idea) {
    this._ideas.push(idea);
    this.render()
  }

  getTagColor(tag) {
    tag = tag.toLowerCase();
    let tagClass = '';
    if (this._validTags.has(tag)) {
      tagClass = `tag-${tag}`;
    } else {
      tagClass = '';
    }
    return tagClass
  }

  render() {
    console.log(this._ideaList)
    this._ideaList.innerHTML = this._ideas.map(idea => {
      const tagClass = this.getTagColor(idea.tag);
      return `<div class="card" data-id="${idea._id}">
      <button class="delete"><i class="fas fa-times"></i></button>
      <h3>
        ${idea.text}
      </h3>
      <p class="tag  ${tagClass}">${idea.tag}</p>
      <p>
        Posted on <span class="date">${idea.date}</span> by
        <span class="author">${idea.username}</span>
      </p>
    </div>`
    }).join('');
  }
}

export default IdeaList;