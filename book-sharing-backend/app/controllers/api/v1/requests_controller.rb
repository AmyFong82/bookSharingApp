class Api::V1::RequestsController < ApplicationController

	def create
		request = Request.create(user_id: params[:requester_id], book_id: params[:book_id])
		if request.valid?
			render json: { book_id: request.book_id }, status: :created
		else
			render json: { message: "Book has already been requested."}, status: :not_acceptable
		end

	end

end
