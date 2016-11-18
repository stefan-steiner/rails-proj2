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
		redirect_to '/'
	end

	def destroy
		@cart = current_user.cart;
		@cart.items.delete(Item.find(params[:id]))
		redirect_to '/cart/' + current_user.id.to_s 
	end
end
