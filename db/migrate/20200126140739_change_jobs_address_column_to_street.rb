class ChangeJobsAddressColumnToStreet < ActiveRecord::Migration[6.0]
  def change
    rename_column :jobs, :address, :street
  end
end
