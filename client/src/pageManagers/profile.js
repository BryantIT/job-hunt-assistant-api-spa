class ProfilePage extends PageManager{

  constructor(container, adapter){
    super(container)
    this.adapter = new ProfileAdapter(adapter)
  }

  initBindingsAndEventListeners(){
    return null
  }

  async fetchAndRenderPageResources(){
    try{
      const jobs = await this.adapter.getJobs()
      this.container.innerHTML = jobs.map(j => j.company_name).join('')
    }catch(err){
      this.handleError(err)
    }
  }

  get staticHTML(){
    return (`
      <h1>Profile Page</h1>
    `)
  }
}
