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

  // newBindingsAndEventListeners(){
  //   const newButton = this.container.querySelector('#new-button')
  //   newButton.addEventListener('click', this.newJob.bind(this))
  // }

  jobFormBindingsAndEventListeners(){
    const form = this.container.querySelector('form')
    form.addEventListener('submit', this.handleUpdateJob.bind(this))
  }

  // newJobFormBindingsAndEventListeners(){
  //   const form = this.container.querySelector('form')
  //   form.addEventListener('submit', this.handleUpdateJob.bind(this))
  // }

  // newJob(){
  //   this.container.innerHTML = Job.formHTML()
  //
  // }



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
    // const [id, companyName, contactName, email, street, fax, phone1, phone2,
    //   hasApplied, website, applicationLink, hasPhoneInterview, hasInPerson,
    //   salary, address2, city, state, zipcode] = Array.from(e.target.querySelectorAll('input')).map(i => i.value)
    const data={}
    const inputs = Array.from(e.target.querySelectorAll('input'))
    for (let input of inputs) {
      data[input.dataset.name] = input.value
    }
    const textAreas = Array.from(document.querySelectorAll('textarea'))
    for (let textArea of textAreas) {
      data[textArea.dataset.name] = textArea.value
    }
    // const params = {companyName, contactName, email, street, fax, phone1, phone2,
    //   hasApplied, website, applicationLink, hasPhoneInterview,
    //   phoneInterviewNotes, hasInPerson, inPersonNotes, companyNotes,
    //   salary, address2, city, state, zipcode, id}

    // TODO add if statment for if id does not exist
    const job = this.getJobById(data.id)
    // const oldJob = new Job({id, companyName, contactName, email, street, fax,
    //   phone1, phone2, hasApplied, website, applicationLink, hasPhoneInterview,
    //   phoneInterviewNotes, hasInPerson, inPersonNotes, companyNotes, salary,
    //   address2, city, state, zipcode})


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
        job.phoneInterviewNotes = result.phone_interview_notes
        job.hasInPerson = result.has_in_person
        job.inPersonNotes = result.in_person_notes
        job.companyNotes = result.company_notes
        job.salary = result.salary
        job.address2 = result.address2
        job.city = result.city
        job.state = result.state
        job.zipcode = result.zipcode
        this.renderJob(job)
      // update job and render
    }catch(err){

      // job.companyName = oldJob.company_name
      // job.contactName = oldJob.contact_name
      // job.email = oldJob.email
      // job.street = oldJob.street
      // job.fax = oldJob.fax
      // job.phone1 = oldJob.phone1
      // job.phone2 = oldJob.phone2
      // job.hasApplied = oldJob.hasApplied
      // job.website = oldJob.website
      // job.applicationLink = oldJob.applicationLink
      // job.hasPhoneInterview = oldJob.hasPhoneInterview
      // job.phoneInterviewNotes = oldJob.phoneInterviewNotes
      // job.hasInPerson = oldJob.hasInPerson
      // job.inPersonNotes = oldJob.inPersonNotes
      // job.companyNotes = oldJob.companyNotes
      // job.salary = oldJob.salary
      // job.address2 = oldJob.address2
      // job.city = oldJob.city
      // job.state = oldJob.state
      // job.zipcode = oldJob.zipcode
      // this.renderJob(job)
      // this.handleError(err)
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
