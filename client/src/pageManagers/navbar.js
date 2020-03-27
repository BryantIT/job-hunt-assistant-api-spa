class Navbar extends PageManager{

  constructor(container, adapter){
    super(container)
    this.adapter = adapter
  }

  get is_authenticated(){
    return !!this.adapter.token
  }

  initBindingsAndEventListeners(){
    this.container.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick(e){
    if (e.target.tagName === "A") {
      e.preventDefault()
      if (e.target.id !== 'logout-link') {
        const route = e.target.id.split('-')[0]
        if (route !== this.currentPage()){
          this.redirect(route)

        }
      } else{
        this.adapter.token = null
        this.redirect('welcome')
      }
    }
  }



  get staticHTML(){
    if (this.is_authenticated){
      return (`
            <h2><a href="#" id="logout-link">Logout</a></h2>
        `)
    } else {
      return (`
            <h2><a href="#" id="welcome-link">Welcome</a></h2>
            <h2><a href="#" id="signup-link">Signup</a></h2>
            <h2><a href="#" id="login-link">Login</a></h2>
        `)
    }
  }
}
