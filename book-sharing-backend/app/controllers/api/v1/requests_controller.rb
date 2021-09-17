class Api::V1::RequestsController < ApplicationController

	def create
		request = Request.create(user_id: params[:requester_id], book_id: params[:book_id])
		if request.valid?
			render json: { message: "Request Submitted Successfully." }, status: :created
		end

	end

end
