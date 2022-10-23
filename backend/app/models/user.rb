class User < ApplicationRecord
    has_secure_password

    validates :email, presence: true, uniqueness: true
    # validates :password, presence: true, length: { minimum: 6 }
    # validates email has @ and .
    # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    
    # has_many :user_profiles
end
