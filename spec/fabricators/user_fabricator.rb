Fabricator(:user) do
  name {Faker::Name.name}
  email {Faker::Internet.email}
  password {Faker::Internet.password}
  jobs(count: 2)
end
