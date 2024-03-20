import IdeasApi from "../services/ideasApi";
class IdeaList {

  constructor() {
    this._ideaList = document.querySelector('#idea-list');
    this._ideas = [{
      id: 1,
      text: 'helo',
      tag: 'business',
      date: new Date(),
    }];
    this.getIdeas();
    this._validTags = new Set(['business', 'design', 'development', 'marketing']);
  }

  // ReferenceError: regeneratorRuntime is not defined
  // Causing this error because we are using async await syntax

  async getIdeas() {
    try {
      const res = await IdeasApi.getIdeas();
      console.log(res)
      this._ideas = res.data.ideas;
      this.render()
    } catch (error) {
      console.log(error)
    }
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
    this._ideaList.innerHTML = this._ideas.map(idea => {
      const tagClass = this.getTagColor(idea.tag);
      return `<div class="card">
      <button class="delete"><i class="fas fa-times"></i></button>
      <h3>
        ${idea.text}
      </h3>
      <p class="tag  ${tagClass}">${idea.tag}</p>
      <p>
        Posted on <span class="date">${idea.date}</span> by
        <span class="author">${idea.tag}</span>
      </p>
    </div>`
    }).join('');
  }
}

export default IdeaList;