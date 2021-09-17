class Api::V1::BooksController < ApplicationController

	def index
		books = Book.all
		render json: books, except: [:created_at, :updated_at]
	end

	def show
		book = Book.find(params[:id])
		render json: book, except: [:created_at, :updated_at]
	end

	def create
	end

	def update
	end


	def destroy
	end

end
