class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :job_apps do |t|
      t.string :company_name
      t.string :contact_name
      t.string :email
      t.hstore :address
      t.string :fax
      t.string :phone1
      t.string :phone2
      t.boolean :has_applied
      t.datetime :application_date
      t.string :website
      t.string :application_link
      t.boolean :has_phone_interview
      t.datetime :phone_interview_date
      t.text :phone_interview_notes
      t.boolean :has_in_person
      t.datetime :in_person_interview
      t.text :in_person_notes
      t.text :company_notes
      t.integer :salary
      t.belongs_to :user
    end
  end
end
