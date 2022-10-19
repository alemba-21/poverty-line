class UserProfile < ApplicationRecord

    validates :first_name,:last_name, :email, :dob, :national_id, :address, :county, presence: true
    validates :email, uniqueness: true   
    validates :email, format: {with: URI::MailTo::EMAIL_REGEXP }
    validates :phone, :presence => true, :numericality => true, :length => { :minimum => 9, :maximum => 13 }
end