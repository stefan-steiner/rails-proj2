Rails.application.routes.draw do
  devise_for :users
  root 'welcome#index'
  resources :cart
  resources :items
  post '/cart/add', to: 'cart#add'
  delete '/cart/delete/:id', to: 'cart#destroy', as: "cart_delete"
  patch '/cart/increase/:id', to: 'cart#increase', as:"cart_increase"
  patch '/cart/decrease/:id', to: 'cart#decrease', as:"cart_decrease"
  patch '/cart/checkout/:id', to: 'cart#checkout', as:"cart_checkout"
  get '/cart/checkout/:id', to: 'cart#checkout', as: "cart_thankyou"
  get '/tracking', to: 'cart#track', as: "cart_track"

end
