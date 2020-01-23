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
      const userObj = await this.adapter.getUser()
      const user = new User(userObj)
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
