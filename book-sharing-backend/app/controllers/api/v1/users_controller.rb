class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

	def show
		render json: {user: current_user, only: [:username, :email]}, status: :accepted
	end

	def create
		@user = User.create(user_params)
		if @user.valid?
			@token = encode_token(user_id: @user.id)
			render json: { user: @user, only: [:username, :email], jwt: @token }, status: :created
		else
			render json: { error: 'failed to create user' }, status: :not_acceptable
		end
	end

	private

	def user_params
		params.require(:user).permit(:username, :password, :email)
	end

end
