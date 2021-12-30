Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
