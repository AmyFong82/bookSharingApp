class ApplicationController < ActionController::API
	before_action :authorized

	def jwt_key
        ENV['ACCESS_TOKEN_SECRET']
    end

	def encode_token(payload) #{ user_id: 1 }
		# JWT.encode(payload, 'my_s3cr3t')
		JWT.encode(payload, jwt_key)
	end

	def auth_header
		 # { 'Authorization': 'Bearer <token>' }
		request.headers['Authorization'] #Bearer <token>
	end

	def decode_token
		if auth_header()
			token = auth_header.split(' ')[1] #[Bearer, <token>]
			begin
				JWT.decode(token, jwt_key, true, algorithm: 'HS256')
			rescue JWT::DecodeError
				nil
			end
		end	
	end
end
