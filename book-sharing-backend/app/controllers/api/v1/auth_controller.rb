class Api::V1::AuthController < ApplicationController
	# skip_before_action :authorized, only: [:create]

	def create #POST /api/v1/login
		@user = User.find_by(username: user_login_params[:username])
		if @user && @user.authenticate(user_login_params[:password])
			@token = encode_token({ user_id: @user.id })
			render json: { details: @user, books: @user.books, requests: @user.requests, jwt: @token }, status: :accepted
		else
			render json: { message: 'Invalid username or password' }, status: :unauthorized
		end
	end

	private

	def user_login_params
		# { user: { username: 'Amy', password: '1' } }
	    params.require(:user).permit(:username, :password)
	end
end


		  # render json: sighting.to_json(:include => {
		  #   :bird => {:only => [:name, :species]},
		  #   :location => {:only => [:latitude, :longitude]}
		  # }, :except => [:updated_at])
		  # render json: book, except: [:created_at, :updated_at], status: :created