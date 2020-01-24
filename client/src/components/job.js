class Job{

  constructor(job){
    const{
      id,
      company_name,
      contact_name,
      email,
      address,
      fax,
      phone1,
      phone2,
      has_applied,
      application_date,
      website,
      application_link,
      has_phone_interview,
      phone_interview_date,
      phone_interview_notes,
      has_in_person,
      in_person_interview,
      in_person_notes,
      company_notes,
      salary
    } = job
    this.id = id
    this.company_name = company_name
    this.contact_name = contact_name
    this.email = email
    this.address = address
    this.fax = fax
    this.phone1 = phone1
    this.phone2 = phone2
    this.has_applied = has_applied
    this.application_date = application_date
    this.website = website
    this.application_link = application_link
    this.has_phone_interview = has_phone_interview
    this.phone_interview_date = phone_interview_date
    this.phone_interview_notes = phone_interview_notes
    this.has_in_person = has_in_person
    this.in_person_interview = in_person_interview
    this.in_person_notes = in_person_notes
    this.company_notes = company_notes
    this.salary = salary
  }

  get tbAndLinkHTML(){
    return(`
      <tbody>
        <tr>
          <td><a href="#" data-id="${this.id}">${this.company_name}</a></td>
          <td>${this.company_notes}</td>
          <td>${this.has_applied ? "Yes" : "No"}</td>
        </tr>
      </tbody>
      `)
  }
}
