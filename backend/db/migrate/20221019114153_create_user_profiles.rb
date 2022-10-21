class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.integer :phone
      t.boolean :gender
      t.date :dob
      t.integer :national_id
      t.string :address
      t.string :county
      t.string :estate
      t.integer :user_id
      t.text :career_summary
      t.text :experience
      t.text :education
      t.text :skills_and_hobbies
      t.string :languages
      t.string :image

      t.timestamps
    end
  end
end
