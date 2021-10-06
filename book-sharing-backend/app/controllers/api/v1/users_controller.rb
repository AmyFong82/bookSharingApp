class Api::V1::UsersController < ApplicationController
  # skip_before_action :authorized, only: [:create]

	def show
		@user = User.find(params[:id])
		@token = encode_token({ user_id: @user.id })
		render json: { details: @user, books: @user.books, requests: @user.requestedBooks, jwt: @token }, except: [:created_at, :updated_at, :password_digest], status: :accepted
	end

	def create
		@user = User.create(user_params)
		if @user.valid?
			@token = encode_token(user_id: @user.id)
			render json: { details: @user, jwt: @token }, except: [:created_at, :updated_at, :password_digest], status: :created
		else
			render json: { error: 'Username taken' }, status: :not_acceptable
		end
	end

	def show_new_book
		
	end

	private

	def user_params
		params.require(:user).permit(:username, :password, :email)
	end

end
