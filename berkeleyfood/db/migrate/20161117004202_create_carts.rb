class CreateCarts < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.string :item
      t.integer :price
      t.integer :quantity
      t.string :restaurant

      t.timestamps
    end
  end
end
