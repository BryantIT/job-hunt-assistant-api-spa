class User{

  constructor(user){
    const {id, email, name, jobs} = user
    this.id = id
    this.email = email
    this.name = name
    this.jobs = jobs.map(j => new Job(j))
  }
}
