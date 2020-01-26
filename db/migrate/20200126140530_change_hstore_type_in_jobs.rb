class ChangeHstoreTypeInJobs < ActiveRecord::Migration[6.0]
  def change
    change_column :jobs, :address, :string
  end
end
