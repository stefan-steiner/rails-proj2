class CreateCartsAndItems < ActiveRecord::Migration[5.0]
  def change
    create_table :carts_items, id: false do |t|
      t.belongs_to :cart, index: true
      t.belongs_to :item, index: true
    end
  end
end
