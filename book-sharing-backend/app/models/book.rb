class Book < ApplicationRecord
	belongs_to :user
	has_one :request
end
