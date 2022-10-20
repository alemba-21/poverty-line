class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.integer :phone
      t.boolean :gender
      t.datetime :dob
      t.integer :national_id
      t.string :address
      t.string :county
      t.string :estate
      t.integer :user_id

      t.timestamps
    end
  end
end
