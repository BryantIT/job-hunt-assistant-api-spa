class RemoveColumnsFromJobs < ActiveRecord::Migration[6.0]
  def change
    remove_column :jobs, :application_date
    remove_column :jobs, :phone_interview_date
    remove_column :jobs, :in_person_interview
  end
end
