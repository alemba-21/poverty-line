class JobSerializer < ActiveModel::Serializer
  attributes :id, :job_title, :company_name, :job_description, :deadline, :job_type, :required_skills, :job_link
end
