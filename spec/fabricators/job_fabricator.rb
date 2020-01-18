Fabricator(:job) do
  name {Faker::Name.name}
  email {Faker::Internet.email}
  password {Faker::Internet.password}

  company_name {Faker::Company.name}
  contact_name {Faker::Name.name}
  email {Faker::Internet.email}
  address {
    "Street"=>Faker::Address.street_address,
    "Address2"=>Faker::Address.building_number,
    "City"=>Faker::Address.city,
    "State"=>Faker::Address.state_abbr,
    "Zipcode"=>Faker::Address.zip_code
  }
  fax {Faker::PhoneNumber.cell_phone}
  phone1 {Faker::PhoneNumber.cell_phone}
  phone2 {Faker::PhoneNumber.cell_phone}
  has_applied {true}
  application_date {Faker::Date.in_date_period}
  website {Faker::Internet.url}
  application_link {Faker::Internet.url}
  has_phone_interview {true}
  phone_interview_date {Faker::Date.in_date_period}
  phone_interview_notes {Faker::Lorem.paragraph}
  has_in_person {true}
  in_person_interview {Faker::Date.in_date_period}
  in_person_notes {Faker::Lorem.paragraph}
  company_notes {Faker::Lorem.paragraph}
  salary {Faker::Number.number(digits: 5)}
end
