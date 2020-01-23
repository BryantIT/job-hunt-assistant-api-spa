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
    if(e.target.tageName === "A"){
      console.log(e.target)
    }
  }



  get staticHTML(){

    if(this.is_authenticated){
      return(`
        <nav id="menu">
          <ul class="links">
            <li><a href="index.html" id="profile-link">Profile</a></li>
            <li><a href="generic.html" id="jobs-link">Jobs</a></li>
            <li><a href="elements.html" id="logout-link">Logout</a></li>
          </ul>
        </nav>
        `)
    }else{
      return(`
        <nav id="menu">
          <ul class="links">
            <li><a href="index.html" id="welcome-link">Welcome</a></li>
            <li><a href="generic.html" id="signup-link">Signup</a></li>
            <li><a href="elements.html" id="login-link">Login</a></li>
          </ul>
        </nav>
        `)
    }
  }
}
