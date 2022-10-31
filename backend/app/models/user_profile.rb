class UserProfile < ApplicationRecord

    validates :firstname,:lastname, :email, :national_id, :address, :county, presence: true
    validates :national_id, length: { is: 8 }
    validates :email, uniqueness: true   
    validates :email, format: {with: URI::MailTo::EMAIL_REGEXP }
    validates :phone, :presence => true, :numericality => true, :length => { :minimum => 9, :maximum => 13 }
    belongs_to :user
end