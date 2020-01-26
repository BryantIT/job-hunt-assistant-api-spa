class ProfilePage extends PageManager{

  constructor(container, adapter){
    super(container)
    this.adapter = new ProfileAdapter(adapter)
    this.user = null
  }

  initBindingsAndEventListeners(){
    return null
  }


  profileBindingsAndEventListeners(){
    const jobList = this.container.querySelector('table')
    jobList.addEventListener('click', this.handleJobClick.bind(this))
  }

  jobBindingsAndEventListeners(){
    const editButton = this.container.querySelector('button')
    editButton.addEventListener('click', this.formalizeJob.bind(this))
  }

  handleJobClick(e){
    if(e.target.tagName === "A"){
      const jobId = e.target.dataset.id
      this.renderJob(jobId)
    }
  }

  formalizeJob(e){
    const id = e.target.dataset.id
    const job = this.user.jobs.find(j => j.id = id)
    if(job){
      this.container.innerHTML = job.formHTML
    }else{
      this.handleError({
        type: "404 Not Found",
        msg: "Job Was Not Found"
      })
    }
  }

  async fetchAndRenderPageResources(){
    try{
      const userObj = await this.adapter.getUser()
      this.user = new User(userObj)
      this.renderUser()
    }catch(err){
      this.handleError(err)
    }
  }

  get staticHTML(){
    return (`
      <section id="one" class="wrapper post">
        <div class="inner current">
          <article class="box">
            <div class="loader">
              <div class="face">
                <div class="circle"></div>
              </div>
              <div class="face">
                <div class="circle"></div>
              </div>
            </div>
          </article>
        </div>
      </section>
    `)
  }

  renderJob(id){
    const job = this.user.jobs.find(j => j.id == id)
    if(job){
      this.container.innerHTML = job.showHTML
      this.jobBindingsAndEventListeners()
    }else this.handleError({
      type: "404 Not Found",
      msg: "Job was not found"
    })
  }

  renderUser(){
    this.container.innerHTML = this.user.profileHTML
    this.profileBindingsAndEventListeners()
  }
}
