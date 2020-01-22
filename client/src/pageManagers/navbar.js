class Navbar extends PageManager{

  constructor(container, adapter){
    super(container)
    this.adapter - this.adapter
  }

  get is_authenticated(){
    return !!this.adapter.token
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
