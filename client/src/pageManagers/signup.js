class SignupPage {

  constructor(container, adapter) {
    this.container = container
    this.adapter = new SignupAdapter(adapter)
  }

  get staticHTML() {
    return (`
      <section id="one" class="wrapper post bg-img" data-bg="banner2.jpg">
        <div class="inner">
          <article class="box">
            <form method="post" action="#">
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
                    <li><input type="submit" value="Sign In" /></li>

                  </ul>
                </div>
              </div>
            </form>
          </article>
        </div>
      </section>
    `)
  }
  render() {
    this.container.innerHTML = this.staticHTML
  }
}
