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

	def increase
		@item = Item.find(params[:id])
		@item.quantity += 1
		@item.save
	end

	def decrease
		@item = Item.find(params[:id])
		if @item.quantity > 1
			@item.quantity -= 1
			@item.save
		end
	end

	def checkout
		@cart = current_user.cart
		@items = @cart.items
		@items.each do |item|
			item.quantity = 1
			item.save
		end
		@cart.items.delete(Item.all)
	end

	def destroy
		@cart = current_user.cart;
		@cart.items.delete(Item.find(params[:id]))
		redirect_to '/cart/' + current_user.id.to_s
	end
end
