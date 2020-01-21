class SignupPage extends PageManager{

  initBindingsAndEventListeners(){
    this.form = this.container.querySelector('#signup-form')

    this.form.addEventListener('submit', this.handleSubmit.bind(this))
  }

  handleSubmit(e){
    e.preventDefault()
    const inputs = Array.from(e.target.querySelectorAll('input'))
    const [name, email, password] = inputs.map(input => input.value)
    const params ={
      user: {
        email, password, name
      }
    }
    this.adapter.signup(params)
  }

  get staticHTML() {
    return (`
      <section id="one" class="wrapper post bg-img" data-bg="banner2.jpg">
        <div class="inner">
        <h2>Signup or Sign In</h2>
          <article class="box">
            <form id="signup-form">
              <div class="row uniform">
                <div class="6u 12u$(xsmall)">
                  <input type="text" name="name" id="name" value="" placeholder="Name" required >
                </div>
                <div class="6u$ 12u$(xsmall)">
                  <input type="email" name="email" id="email" value="" placeholder="Email" required >
                </div>
                <div class="6u 12u$(xsmall)">
                  <input type="password" name="password" id="password" value="" placeholder="Password" required>
                </div>

                <div class="12u$">
                  <ul class="actions">
                    <li><button type="submit" class="button special fit">Sign In</button></li>
                  </ul>
                </div>
              </div>
            </form>
          </article>
        </div>
      </section>
    `)
  }
}
