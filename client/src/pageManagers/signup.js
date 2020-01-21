class SignupPage {

  constructor(container) {
    this.container = container
  }

  get staticHTML() {
    return (`
    
    `)
  }
  render() {
    this.container.innerHTML = this.staticHTML
  }
}
