class Job < ApplicationRecord
    validates :job_title, presence: true
    validates :company_name, presence: true
    validates :job_description, presence: true
    validates :job_type, presence: true
    validates :required_skills, presence: true

    belongs_to :user_profile
end
