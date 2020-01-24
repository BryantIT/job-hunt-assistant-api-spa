class ProfilePage extends PageManager{

  constructor(container, adapter){
    super(container)
    this.adapter = new ProfileAdapter(adapter)
    this.user = null
  }

  initBindingsAndEventListeners(){
    return null
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

  finalBindingsAndEventListeners(){
    const jobList = this.container.querySelector('tr')
    jobList.addEventListener('click', this.handleJobClick.bind(this))
  }

  handleJobClick(e){
    if(e.target.tagName === "A"){
      const jobId = e.target.dataset.id
      this.renderJob(job)
    }
  }

  get staticHTML(){
    return (`
      <div class="loader">
        <div class="face">
          <div class="circle"></div>
        </div>
        <div class="face">
          <div class="circle"></div>
        </div>
      </div>
    `)
  }

  renderJob(job){
    const job = this.user.jobs.find(j => j.id == id)
    if(job){
      this.container.innerHTML = job.showHTML
    }else this.handleError({
      type: "404 Not Found",
      msg: "Job was not found"
    })
  }

  renderUser(){
    this.container.innerHTML = this.user.profileHTML
    this.finalBindingsAndEventListeners()
  }
}
