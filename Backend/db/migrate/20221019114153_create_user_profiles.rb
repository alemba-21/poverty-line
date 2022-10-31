class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles do |t|
      t.string :firstname
      t.string :middlename
      t.string :lastname
      t.string :email
      t.string :gender
      t.string :age
      t.integer :national_id
      t.string :address
      t.integer :phone
      t.string :county
      t.string :estate
      t.integer :user_id
      t.text :career_summary
      t.text :experience_date
      t.text :experience
      t.text :education
      t.text :education_date
      t.text :skills_and_hobbies
      t.string :languages
      t.string :image

      t.timestamps
    end
  end
end
