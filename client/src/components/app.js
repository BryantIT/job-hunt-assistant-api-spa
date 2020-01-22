class App{

  constructor(){
    this.adapter = new BaseAdapter()
    this.initBindingsAndEventListeners()
    this.router = new Router({
      'welcome': new WelcomePage()
    })
  }

  initBindingsAndEventListeners(){
    this.container = document.querySelector('#app-container')
    this.pageAlert = document.querySelector('#alert-container')
    this.navbarContainer = document.querySelector('#navbar-container')
    this.pageContainer = document.querySelector('#page-container')
  }

  renderPage(page){
    this.router.render(page)
  }
}
