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
    this.companyName = company_name
    this.contactName = contact_name
    this.email = email
    this.address = address
    this.fax = fax
    this.phone1 = phone1
    this.phone2 = phone2
    this.hasApplied = has_applied
    this.applicationDate = application_date
    this.website = website
    this.applicationLink = application_link
    this.hasPhoneInterview = has_phone_interview
    this.phoneInterviewDate = phone_interview_date
    this.phoneInterviewNotes = phone_interview_notes
    this.hasInPerson = has_in_person
    this.inPersonInterview = in_person_interview
    this.inPersonNotes = in_person_notes
    this.companyNotes = company_notes
    this.salary = salary
  }

  get showHTML(){
    return(`
      <section id="one" class="wrapper post bg-img" data-bg="banner2.jpg" style="background-image: url(assets/images/banner2.jpg);">
        <div class="inner current">
          <article class="box">
          <header>
          <h2>${this.companyName}</h2>
          </header>
          <button id="edit-job" type="submit" class="button special fit">Edit</button>
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
                ${this.address.street}<br>
                ${this.address.address2}<br>
                ${this.address.city}, ${this.address.state} &nbsp&nbsp ${this.address.zipcode}
              </p>
              <p>
                <li><strong>Application Information</strong></li>
                <strong>Applied:</strong> ${this.hasApplied ? "Yes" : "No"} <strong>Application Date:</strong>${this.applicationDate}<br>
                <strong>Phone Interview:</strong> ${this.hasPhone_Interview ? "Yes" : "No"} <strong>Phone Interview Date:</strong>${this.phoneInterviewDate}<br>
                <strong>In-Person Interview:</strong> ${this.hasInPerson ? "Yes" : "No"} <strong>In-Person Interview Date:</strong>${this.inPersonInterview}<br>
              </p>
          </article>
          <a href="#two" class="more">Learn More</a>
          </ul>

        </div>
      </section>

      <section id="two" class="wrapper post bg-img" data-bg="banner2.jpg" style="background-image: url(assets/images/banner2.jpg);">
        <div class="inner current">
          <article class="box">
          <header>
          <h2>${this.companyName}</h2>
          </header>
          <h2>Notes</h2>
                  <p></p>
                  <div class="row">
                    <div class="6u 12u$(small)">
                      <h3>Company Notes</h3>
                      <p>${this.companyNotes ? this.companyNotes : "None"}</p>
                    </div>
                    <div class="6u$ 12u$(small)">
                      <h3>Phone Interview Notes</h3>
                      <p>${this.phoneInterviewNotes ? this.phoneInterviewNotes : "None"}</p>
                    </div>
                    <!-- Break -->
                    <div class="6u$ 12u$(small)">
                      <h3>In-Person Notes</h3>
                      <p>${this.inPersonNotes ? this.inPersonNotes : "None"}</p>
                    </div>
                  </div>
          </article>
          <a href="#one" class="button alt small">Back</a>
        </div>
      </section>
      `)
  }

  get tbAndLinkHTML(){
    return(`
      <tbody>
        <tr>
          <td><a href="#" data-id="${this.id}">${this.companyName}</a></td>
          <td>${this.companyNotes}</td>
          <td>${this.hasApplied ? "Yes" : "No"}</td>
        </tr>
      </tbody>
      `)
  }
}
