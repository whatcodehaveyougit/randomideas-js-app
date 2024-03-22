class Modal {
  constructor() {
    this._modal = document.querySelector('#modal')
    this._modalBtn = document.querySelector('#modal-btn')
    this.addEventListeners()
  }

  addEventListeners() {
    this._modalBtn.addEventListener('click', this.open.bind(this))
    window.addEventListener('click', this.outsideClick.bind(this))
    document.addEventListener('closemodal', this.close.bind(this))
  }

  open() {
    this._modal.style.display = 'block'
  }

  close() {
    this._modal.style.display = 'none'
  }

  outsideClick(e) {
    if (e.target === this._modal) { // if the target is the modal
      // The target is the event that triggered the event
      this.close()
    }
  }

}

export default Modal;