class ProfileAdapter{

  constructor(baseAdapter){
    this.baseAdapter = baseAdapter
    this.baseURL = this.baseAdapter.baseURL
  }

  get token(){
    return this.baseAdapter.token
  }

  get headers(){
    return this.baseAdapter.headers
  }

  async getJobs(){
    const res = await fetch(`${this.baseURL}/jobs`, {
      headers: this.headers
    })
    await this.baseAdapter.checkStatus(res)
    return await res.json()
  }
}
