class LoginPage extends PageManager{

  constructor(container, adapter){
    super(container)
    this.adapter = new LoginAdapter(adapter)
  }

  initBindingsAndEventListeners(){
    this.form = this.container.querySelector('form#login-form')
    this.form.addEventListener('submit', this.handleSubmit.bind(this))
  }

  handleSubmit(e){
    e.preventDefault()
    const [email, password] = Array.from(e.target.querySelectorAll('input')).map(i => i.value)
    const params = {
      user: {email, password}
    }
    this.adapter.login(params)
  }

  get staticHTML() {
    return (`
      <section id="one" class="wrapper post bg-img" data-bg="banner2.jpg" style="background-image: url(assets/images/banner2.jpg);">
        <div class="inner current">
        <h2>Please Login</h2>
          <article class="box">
            <form id="login-form">
              <div class="row uniform">
                <div class="6u 12u$(xsmall)">
                  <input type="email" name="email" id="email" value="" placeholder="Email" required >
                </div>
                <div class="6u$ 12u$(xsmall)">
                  <input type="password" name="password" id="password" value="" placeholder="Password" required>
                </div>

                <div class="12u$">
                  <ul class="actions">
                    <li><button type="submit" class="button special fit">Login</button></li>
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
