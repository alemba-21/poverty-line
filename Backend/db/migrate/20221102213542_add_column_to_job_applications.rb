class AddColumnToJobApplications < ActiveRecord::Migration[7.0]
  def change
    add_column :job_applications, :user_profile_id, :integer
  end
end
