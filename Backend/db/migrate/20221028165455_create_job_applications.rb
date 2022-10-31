class CreateJobApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :job_applications do |t|
      t.string :cover_letter
      t.string :attachment

      t.timestamps
    end
  end
end
