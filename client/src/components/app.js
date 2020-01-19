class App {

  constructor() {

    this.initBindingsAndEventListeners()
  }

  initBindingsAndEventListeners() {
    this.container = document.querySelector('#app-container')
    this.navbarContainer = document.querySelector('#navbar-container')
    this.pageContainer = document.querySelector('#page-container')
  }
}
