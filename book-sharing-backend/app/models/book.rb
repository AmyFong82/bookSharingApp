class Book < ApplicationRecord
	belongs_to :user
	has_one :request

	def self.available_books
		Book.left_outer_joins(:request).where(request: {book_id: nil})
	end
end
