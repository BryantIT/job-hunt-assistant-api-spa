class User{

  constructor(user){
    const {id, email, name, jobs} = user
    this.id = id
    this.email = email
    this.name = name
    this.jobs = jobs.map(j => new Job(j))
  }

  get profileHTML(){
    return (`
      <div>
      ${Job.formHTML()}
      </div>
      <section id="one" class="wrapper post bg-img" data-bg="banner3.jpg" style="background-image: url(assets/images/banner3.jpg);">
        <div class="inner current">
          <header>
            <h3>Welcome to your job hunt assistant, ${this.name}</h3>
            <h4>Your Job Applications Thus Far:</h4>
          </header>
          <article class="box">
            <div class="table-wrapper">
              <table class="alt">
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Location</th>
                    <th>Applied?</th>
                  </tr>
                </thead>
                    ${this.jobs.sort((j1, j2) => j1.id - j2.id ).map(j => j.tbAndLinkHTML).join("")}
              </table>
            </div>
            <ul></ul>
          </article>
        </div>
      </section>
      `)
  }
}
