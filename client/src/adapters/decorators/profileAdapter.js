class ProfileAdapter {

  constructor(baseAdapter) {
    this.baseAdapter = baseAdapter
    this.baseURL = this.baseAdapter.baseURL
  }

  get token() {
    return this.baseAdapter.token
  }

  get headers() {
    return this.baseAdapter.headers
  }

  async updateJob(params) {
    const {company_name, contact_name, email, street, address2, city, state,
      zipcode, fax, phone1, phone2, hasApplied, website, applicationLink,
      hasPhoneInterview, phoneInterviewNotes, hasInPerson, inPersonNotes,
      companyNotes, salary, id} = params
    const url = `${this.baseURL}/jobs/${id}`
    const body = {
      job: {
        company_name: company_name,
        contact_name: contact_name,
        email,
        street,
        address2,
        city,
        state,
        zipcode,
        fax,
        phone1,
        phone2,
        has_applied: hasApplied,
        website,
        application_link: applicationLink,
        has_phone_interview: hasPhoneInterview,
        phone_interview_notes: phoneInterviewNotes,
        has_in_person: hasInPerson,
        in_person_notes: inPersonNotes,
        company_notes: companyNotes,
        salary
      }
    }
    const res = await fetch(url, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body)
    })
    await this.baseAdapter.checkStatus(res)
    return await res.json()
  }

  async getUser() {
    const res = await fetch(`${this.baseURL}/profile`, {
      headers: this.headers
    })
    await this.baseAdapter.checkStatus(res)
    return await res.json()
  }
}
