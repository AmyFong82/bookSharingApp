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
		book = Book.create(book_params)
		render json: { book: book}, status: :created
	end

	def update
	end


	def destroy
	end

	private

	def book_params
		params.require(:book).permit(:user_id, :title, :author, :reading_age, :cover_image)
	end

end
