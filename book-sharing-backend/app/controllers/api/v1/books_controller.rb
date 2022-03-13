class Api::V1::BooksController < ApplicationController
  # skip_before_action :authorized, only: [:index, :show]

	def index
		books = Book.available_books
		render json: books, except: [:created_at, :updated_at]
	end

	def show
		if params[:id].length > 10 
			book = Book.find_by(cuid: params[:id])
		else book = Book.find(params[:id])
			render json: book, except: [:created_at, :updated_at]
		end
	end

	def create
		book = Book.create(book_params)
		render json: book, except: [:created_at, :updated_at], status: :created
	end

	def update
		book = Book.find(params[:id])
		if current_user.id == book.user_id
			book.update(book_params)
			render json: book, except: [:created_at, :updated_at], status: :accepted
		else
			render json: {message: "You cannot edit this book"}
		end
	end


	def destroy
		book = Book.find(params[:id])
		book.delete
		render json: {message: "Book Deleted"}
	end

	private

	def book_params
		params.require(:book).permit(:user_id, :title, :author, :reading_age, :cover_image, :cuid)
	end

end
