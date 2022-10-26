class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :middlename, :lastname, :email, :gender, :dob, :national_id, :address, :county, :estate, :career_summary, :experience, :education, :skills_and_hobbies, :languages 
end
