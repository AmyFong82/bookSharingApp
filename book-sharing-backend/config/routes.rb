Rails.application.routes.draw do
  #localhost:3000/api/v1/users
  namespace :api do
    namespace :v1 do
      resources :users, except: [:index] do
        resources :books
      end
      resources :books
      resources :requests
      post '/login', to: 'auth#create'
      post '/signup', to: 'users#create'
    end
 end

end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

#index, show, create, update, destroy
