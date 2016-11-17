Rails.application.routes.draw do
  devise_for :users
  get 'welcome/index'
  root 'welcome#index'
  resources :cart
  resources :items
  patch 'delete', to: 'items#delete'
end
