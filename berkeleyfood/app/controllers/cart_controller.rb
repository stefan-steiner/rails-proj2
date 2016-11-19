class CartController < ApplicationController
	def index
		@carts = Cart.all
	end

	def show
		@cart = Cart.find(params[:id])
	end

	def add
		@cart = current_user.cart
		if @cart.nil?
			@cart = Cart.create(:user_id => current_user.id)
		else
			@cart.items << Item.find(params[:id])
		end
	end

	def destroy
		@cart = current_user.cart;
		@cart.items.delete(Item.find(params[:id]))
		redirect_to '/cart/' + current_user.id.to_s
	end
end

Item.create(:item => "Wings", :quantity => 1, :price => 7, :restaurat => "Crossroads")
Item.create(:item => "Orange Chicken Plate", :quantity => 1, :price => 7, :restaurat => "Crossroads")
Item.create(:item => "Steak Plate", :quantity => 1, :price => 7, :restaurat => "Crossroads")
Item.create(:item => "Hamburger", :quantity => 1, :price => 5, :restaurat => "Crossroads")
Item.create(:item => "Chocolate Pancakes", :quantity => 1, :price => 3, :restaurat => "Crossroads")
