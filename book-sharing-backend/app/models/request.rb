class Request < ApplicationRecord
	belongs_to :user
	belongs_to :book

	validates :book_id, uniqueness: true


	def bookDetails
		Book.joins(:request).where(request: {book_id: self.book_id})[0]
	end
end
