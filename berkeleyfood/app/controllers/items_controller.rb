class ItemsController < ApplicationController
	def add
		@item = Item.find(params[:id])
		@item.cart_id = current_user.cart.id
		@item.save
		redirect_to cart_path(current_cart.id)
	end

	def delete
		@item = Item.find(params[:id])
		Item.destroy(@item.id)
		redirect_to cart_path(current_cart.id)
	end

	def new
		@item = Item.new
	end

	def create
		@item = Item.new(item_params)
		@item.cart_id = current_cart.id
		@item.save
		redirect_to cart_path(current_cart.id)
	end

	def item_params
		params.require(:item).permit(:price).permit(:quantity).permit(:restaurant)
	end
end
