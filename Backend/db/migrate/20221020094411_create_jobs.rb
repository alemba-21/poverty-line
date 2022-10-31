class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :job_title
      t.string :company_name
      t.text :job_description
      t.date :deadline
      t.text :job_type
      t.text :required_skills
      t.string :job_link
      t.integer :admin_id

      t.timestamps
    end
  end
end
