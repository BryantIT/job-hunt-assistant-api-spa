class Navbar extends PageManager{

  constructor(container, adapter){
    super(container)
    this.adapter = adapter
  }

  get is_authenticated(){
    return !!this.adapter.token
  }

  initBindingsAndEventListeners(){
    this.menu = document.getElementById('menu')
    this.menu.addEventListener('click', this.handleClick.bind(this))
    this.container.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick(e){
    if(e.target.tagName === "A"){
      e.preventDefault()
      const route = e.target.id.split('-')[0]
      if(route !== this.currentPage()) {this.redirect(route)}
    }
  }



  get staticHTML(){

    if(this.is_authenticated){
      return(`
        <nav id="menu">
          <ul class="links">
            <li><a href="#" id="profile-link">Profile</a></li>
            <li><a href="#" id="jobs-link">Jobs</a></li>
            <li><a href="#" id="logout-link">Logout</a></li>
          </ul>
        </nav>
        `)
    }else{
      return(`
        <nav id="menu">
          <ul class="links">
            <li><a href="#" id="welcome-link">Welcome</a></li>
            <li><a href="#" id="signup-link">Signup</a></li>
            <li><a href="#" id="login-link">Login</a></li>
          </ul>
        </nav>
        `)
    }
  }
}
