class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :middlename, :lastname, :email, :gender, :age, :national_id, :address, :phone, :county, :estate, :career_summary, :experience_date, :experience, :education_date, :education, :skills_and_hobbies, :languages
end
