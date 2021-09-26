class User < ApplicationRecord
	has_many :books
	has_many :requests

	has_secure_password
	validates :username, uniqueness: { case_sensitive: false }
	validates :username, :email, :password, presence: true
	validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

end
