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

  renderUser(){
    this.container.innerHTML = this.user.profileHTML
  }
}
