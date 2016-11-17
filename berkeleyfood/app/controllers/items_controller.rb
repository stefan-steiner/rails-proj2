class ItemsController < ApplicationController
	def add

	end

	def new 
		@item = Item.new
	end

	def create
		@item = Item.new(item_params)
		@cart.save
	end

	def item_params
		params.require(:item).permit(:item).permit(:price).permit(:quantity).permit(:restaurant)
	end
end
