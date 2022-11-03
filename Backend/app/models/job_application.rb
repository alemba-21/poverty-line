class JobApplication < ApplicationRecord
    validates :cover_letter, presence: true
    validates :attachment, presence: true


    # belongs_to :user_profile
end
