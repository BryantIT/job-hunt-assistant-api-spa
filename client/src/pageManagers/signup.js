class SignupPage extends PageManager{

  constructor(container, adapter){
    super(container)
    this.adapter = new SignupAdapter(adapter)
  }

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
      <section id="one" class="wrapper post bg-img" data-bg="banner2.jpg" style="background-image: url(assets/images/banner2.jpg);">
        <div class="inner current">
          <header>
            <h3>Welcome to your job hunt assistant</h3>
            <p>
              This site is designed to assist you as you begin your job hunt.
              Here you will be able to keep track of what jobs you are interested in applying for
              and have applied for. Prompts will encourage you to research the company you are sending
              your resume to. You will also be able to create notes of your experience with each company
              that you can come back to for review.
            </p>
            <h4>Good luck on your hunt!</h4>
          </header>
          <article class="box">
            <form id="signup-form">
              <div class="row uniform">
                <div class="6u 12u$(xsmall)">
                  <input type="text" name="name" id="name" value="" placeholder="Name" required>
                </div>
                <div class="6u$ 12u$(xsmall)">
                  <input type="email" name="email" id="email" value="" placeholder="Email" required>
                </div>
                <div class="6u 12u$(xsmall)">
                  <input type="password" name="password" id="password" value="" placeholder="Password" required>
                </div>

                <div class="12u$">
                  <ul class="actions">
                    <li><button type="submit" class="button special fit">Signup</button></li>
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
