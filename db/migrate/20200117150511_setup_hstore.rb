class SetupHstore < ActiveRecord::Migration[6.0]
  def self.up
  execute "CREATE EXTENSION IF NOT EXISTS hstore"
 end
 def self.down
  execute "DROP EXTENSION IF EXISTS hstore"
 end
end