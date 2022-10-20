class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :job_title
      t.string :job_description
      t.string :required_skills
      t.string :job_link

      t.timestamps
    end
  end
end
