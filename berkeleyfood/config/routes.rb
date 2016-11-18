Rails.application.routes.draw do
  devise_for :users
  root 'welcome#index'
  resources :cart
  resources :items
  post '/cart/add', to: 'cart#add'
  delete '/cart/delete/:id', to: 'cart#destroy', as: "cart_delete"
end
