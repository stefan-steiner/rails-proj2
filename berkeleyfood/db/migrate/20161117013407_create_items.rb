class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :item
      t.integer :price
      t.integer :quantity
      t.string :restaurat

      t.timestamps
    end
  end
end
