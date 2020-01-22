class WelcomePage extends PageManager{

  initBindingsAndEventListeners(){
    this.signupLink = this.container.querySelector('a#signup')
    this.loginLink = this.container.querySelector('a#login')

    this.signupLink.addEventListener('click', this.handleSignupClick.bind(this))
    this.loginLink.addEventListener('click', this.handleLoginClick.bind(this))
  }

  handleSignupClick(e){
    e.preventDefault()
    this.redirect('signup')
  }

  handleLoginClick(e){
    e.preventDefault()
    this.redirect('login')

  }

  get staticHTML(){
    return(`
      <section id="banner" class="bg-img" data-bg="banner.jpg">
        <div class="inner">
          <header>
            <h1>Man cannot discover new oceans unless he has the courage to lose sight of the shore.</h1>
            <p><small>– Andre Gide</small><br></p>
          </header>
          <a href="#" class="button" id="signup">Signup</a>
          <a href="#" class="button" id="login">Login</a>
        </div>

      </section>
      `)
  }

}
