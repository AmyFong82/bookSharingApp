# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: 'Amy', email: 'amyhfong@gmail.com', password: '1')
user2 = User.create(name: 'BB', email: 'miyukipg@gmail.com', password: '2')

book1 = Book.create(title: 'Frog and Toad', 
					author: 'Arnold Lobel', 
					cover_image: 'https://images-na.ssl-images-amazon.com/images/I/81WFbb3AyDL.jpg',
					reading_age: '4 - 8 years',
					user_id: 1)

book2 = Book.create(title: 'Ming Lo Moves the Mountain',
					author: 'Arnold Lobel',
					cover_image: 'https://images-na.ssl-images-amazon.com/images/I/51haiOXClkL.jpg',
					reading_age: '4 - 8 years',
					user_id: 2)

request1 = Request.create(user_id: 1, book_id: 2)

review1 = Review.create(user_id: 1, book_id: 1, content: 'Great book! Me and my 5-year-old boy love it!')