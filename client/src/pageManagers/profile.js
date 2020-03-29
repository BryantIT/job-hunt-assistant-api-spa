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
    this.newJobFormBindingsAndEventListeners()
  }

  jobBindingsAndEventListeners(){
    const editButton = this.container.querySelector('button')
    editButton.addEventListener('click', this.formalizeJob.bind(this))
  }

  backButtonBindingsAndEventListeners(){
    const backButton = this.container.querySelector('#backButton')
    backButton.addEventListener('click', this.renderUser.bind(this))
  }


  jobFormBindingsAndEventListeners(){
    const form = this.container.querySelector('form')
    form.addEventListener('submit', this.handleUpdateJob.bind(this))
  }

  newJobFormBindingsAndEventListeners(){
    const form = this.container.querySelector('form')
    form.addEventListener('submit', this.handleNewJob.bind(this))
  }

  async handleNewJob(e){
    e.preventDefault()
    const data={}
    const inputs = Array.from(e.target.querySelectorAll('input'))
    for (let input of inputs) {
      data[input.dataset.name] = input.value
    }

    try{
      let result = await this.adapter.newJob(data)
      const job = new Job(result)
        this.renderJob(job)
    }catch(err){
      this.handleError(err)
    }
  }

  handleJobClick(e){
    if(e.target.tagName === "A"){
      const jobId = e.target.dataset.id
      const job = this.getJobById(jobId)
      this.renderJob(job)
    }
  }

  formalizeJob(e){
    const id = e.target.dataset.id
    const job = this.user.jobs.find(j => j.id == id)
    if(job){
      this.container.innerHTML = job.formHTML
      this.jobFormBindingsAndEventListeners()
    }else{
      this.handleError({
        type: "404 Not Found",
        msg: "Job Was Not Found"
      })
    }
  }

  async handleUpdateJob(e){
    e.preventDefault()
    const data={}
    const inputs = Array.from(e.target.querySelectorAll('input'))
    for (let input of inputs) {
      data[input.dataset.name] = input.value
    }
    const job = this.getJobById(data.id)

    try{
      let result = await this.adapter.updateJob(data)
      console.log(result, job)
        job.companyName = result.company_name
        job.contactName = result.contact_name
        job.email = result.mail
        job.street = result.street
        job.fax = result.fax
        job.phone1 = result.phone1
        job.phone2 = result.phone2
        job.hasApplied = result.has_applied
        job.website = result.website
        job.applicationLink = result.application_link
        job.hasPhoneInterview = result.has_phone_interview
        job.hasInPerson = result.has_in_person
        job.salary = result.salary
        job.address2 = result.address2
        job.city = result.city
        job.state = result.state
        job.zipcode = result.zipcode
        this.renderJob(job)
    }catch(err){
      this.handleError(err)
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

  getJobById(id){
    return this.user.jobs.find(j => j.id == id)
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

  renderJob(job){
    if(job){
      this.container.innerHTML = job.showHTML
      this.jobBindingsAndEventListeners()
      this.backButtonBindingsAndEventListeners()
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
