class Book < ApplicationRecord
	belongs_to :user
	has_many :reviews
	has_many :requests
end
