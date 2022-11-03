class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :middlename, :lastname, :email, :gender, :age, :national_id, :address, :phone, :county, :estate, :career_summary, :experience_start_date, :experience_end_date, :experience, :education_start_date, :education_end_date, :education, :skills_and_hobbies, :languages

  # has_many :job_applications
end
