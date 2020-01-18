# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# bob = User.create(name: 'Bob Test', email: 'bobtest@test.com', password: 'test1234')

job1 = Job.create(
    company_name: "Test Company",
    contact_name: "Suzy Test",
    email: "suzytest@test.com",
    address: {
      Street: "123 Test Street",
      Address2: "Suite 122A",
      City: "Testville",
      State: "TN",
      Zipcode: 37055},
    fax: "1234567891",
    phone1: "1234567891",
    phone2: "9876543219",
    has_applied: true,
    application_date: "2020-01-15 14:27:00",
    website: "http://www.test.com",
    application_link: "http://www.test.com/apply",
    has_phone_interview: true,
    phone_interview_date: "2020-01-15 14:29:28",
    phone_interview_notes: "They just asked me my name and when I could come in for an interview",
    has_in_person: true,
    in_person_interview: "2020-01-15 14:30:58",
    in_person_notes: "Went over my resume, asked about my hobbies and did I know how to iterate over an array",
    company_notes: "Seemed like a good place to work. Has good reviews on Glassdoor. I hope I get the job",
    salary: 70000),
    user: bob

job2 = Job.create(
    company_name: "The Other Test Company",
    contact_name: "Sally Test",
    email: "sallytest@test.com",
    address: {
      Street: "456 Test Street",
      Address2: "Suite 233B",
      City: "Testiton",
      State: "TN",
      Zipcode: 37055},
    fax: "1234567891",
    phone1: "1234567891",
    phone2: "9876543219",
    has_applied: true,
    application_date: "2020-01-15 14:29:28",
    website: "http://www.othertest.com",
    application_link: "http://www.othertest.com/apply",
    has_phone_interview: false,
    has_in_person: false,
    company_notes: "Startup company.  Online presence is decent. Fun Product",
    salary: 60000),
    user: bob
