class Job{


  static formHTML(job){
    return (`
      <section id="one" class="wrapper post bg-img" data-bg="banner2.jpg" style="background-image: url(assets/images/banner2.jpg);">
        <div class="inner current">
          <header>
            <h3>Add Your Job Prospect</h3>
          </header>
          <article class="box">
            <form id="${job ? 'edit' : 'new'}-job-form">
                ${job ? '<input data-name="id" type="hidden" value="' + job.id + '">' : ''}
              <div class="row uniform">
                <div class="6u 12u$(xsmall)">
                  <input type="text" data-name="company_name" id="company_name" placeholder="Company Name" value="${job ? job.companyName : ''}" required>
                </div>
                <div class="6u$ 12u$(xsmall)">
                  <input type="text" data-name="contact_name" id="contact_name" placeholder="Contact Name" value="${job ? job.contactName : ''}">
                </div>
                <div class="6u 12u$(xsmall)">
                  <input type="email" data-name="email" id="email" placeholder="Email" value="${job ? job.email : ''}">
                </div>
                <div class="6u$ 12u$(xsmall)">
                  <input type="text" data-name="street" id="street" placeholder="Street" value="${job ? job.street : ''}">
                </div>
                <div class="6u 12u$(xsmall)">
                  <input type="text" data-name="address2" id="address2" placeholder="Apt/Floor/Building" value="${job ? job.address2 : ''}">
                </div>
                <div class="6u$ 12u$(xsmall)">
                  <input type="text" data-name="city" id="city" placeholder="City" value="${job ? job.city : ''}">
                </div>
                <div class="6u 12u$(xsmall)">
                  <input type="text" data-name="state" id="State" placeholder="State" value="${job ? job.state : ''}">
                </div>
                <div class="6u$ 12u$(xsmall)">
                  <span>Zipcode:&nbsp</span><input type="number" data-name="zipcode" id="zipcode" placeholder="Zipcode" value="${job ? job.zipcode : ''}">
                </div>
                <div class="6u 12u$(xsmall)">
                  <input type="text" data-name="phone1" id="phone1" placeholder="Phone Number" value="${job ? job.phone1 : ''}">
                </div>
                <div class="6u$ 12u$(xsmall)">
                  <input type="text" data-name="phone2" id="phone2" placeholder="Alt Phone Number" value="${job ? job.phone2 : ''}">
                </div>
                <div class="6u 12u$(xsmall)">
                <input type="text" data-name="fax" id="fax" placeholder="Fax Number" value="${job ? job.fax : ''}">
                </div>
                <div class="6u$ 12u$(xsmall)">
                  <input type="text" data-name="website" id="website" placeholder="Website" value="${job ? job.website : ''}">
                </div>
                <div class="6u 12u$(xsmall)">
                  <input type="text" data-name="application_link" id="application_link" placeholder="Link to Application Page" value="${job ? job.applicationLink : ''}">
                </div>
                <div class="6u$ 12u$(small)">
                  <input type="checkbox" data-name="has_applied" id="has_applied" value="${job ? job.hasApplied : ''}">
                  <label for="has_applied">Applied?</label>
                </div>
                <div class="6u 12u$(xsmall)">
                  <input type="checkbox" data-name="has_phone_interview" id="has_phone_interview" value="${job ? job.hasPhoneInterview : ''}">
                  <label for="has_phone_interview">Phone Interview</label>
                </div>
                <div class="6u$ 12u$(xsmall)">
                  <input type="checkbox" data-name="has_in_person" id="has_in_person" value="${job ? job.hasInPerson : ''}">
                  <label for="has_in_person">In Person Interview</label>
                </div>
                <div class="6u 12u$(xsmall)">
                Salary:<br>
                  <input type="number" data-name="salary" id="salary" value="${job ? job.salary : ''}">
                </div>
              </div>
              <div class="12u$">
              <ul class="actions">
              <li><button type="submit" class="button special fit">${job ? 'Update' : 'Create'}</button></li>
              </ul>
              </div>
          </article>
        </div>
      </section>
    `)
  }

  constructor(job){
    const {id, company_name, contact_name, email, street, fax, phone1, phone2,
      has_applied, website, application_link, has_phone_interview, has_in_person,
      salary, address2, city, state, zipcode
    } = job
    this.id = id
    this.companyName = company_name
    this.contactName = contact_name
    this.email = email
    this.street = street
    this.fax = fax
    this.phone1 = phone1
    this.phone2 = phone2
    this.hasApplied = has_applied
    this.website = website
    this.applicationLink = application_link
    this.hasPhoneInterview = has_phone_interview
    this.hasInPerson = has_in_person
    this.salary = salary
    this.address2 = address2
    this.city = city
    this.state = state
    this.zipcode = zipcode
  }

  get formHTML(){
    return Job.formHTML(this)
  }



  get showHTML(){
    return(`
      <section id="one" class="wrapper post bg-img" data-bg="banner2.jpg" style="background-image: url(assets/images/banner2.jpg);">
        <div class="inner current">
          <article class="box">
          <header>
          <h2>${this.companyName}</h2>
          </header>
          <button data-id="${this.id}" id="edit-job" class="button special fit">Edit</button>
            <ul class="alt">
              <strong>Website</strong> &nbsp&nbsp || &nbsp&nbsp <strong>Application Website</strong><br>
              ${this.website} &nbsp&nbsp || &nbsp&nbsp ${this.applicationLink}
              <p>
                <li><strong>Contact Person</strong></li>
                ${this.contactName}<br>
              </p>
              <p>
                <li><strong>Contact Information</strong></li>
                <strong>Number</strong> ${this.phone1} or ${this.phone2}<br>
                <strong>Fax:</strong> ${this.fax}<br>
                <strong>Email:</strong> ${this.email}<br>
                <strong>Address:</strong><br>
                ${this.street}<br>
                ${this.address2}<br>
                ${this.city}, ${this.state} &nbsp&nbsp ${this.zipcode}
              </p>
              <p>
                <li><strong>Application Information</strong></li>
                <strong>Applied:</strong> ${this.hasApplied ? "Yes" : "No"}<br>
                <strong>Phone Interview:</strong> ${this.hasPhoneInterview ? "Yes" : "No"}<br>
                <strong>In-Person Interview:</strong> ${this.hasInPerson ? "Yes" : "No"}<br>
              </p>
              <li><button type="submit" class="button special fit" id="backButton">Back</button></li>
          </article>
          </ul>
        </div>
      </section>
      `)
  }

  get tbAndLinkHTML(){
    return(`
      <tbody>
        <tr>
          <td><a href="#" data-id="${this.id}">${this.companyName}</a></td>
          <td>${this.city}, ${this.state}</td>
          <td>${this.hasApplied ? "Yes" : "No"}</td>
        </tr>
      </tbody>
      `)
  }
}
