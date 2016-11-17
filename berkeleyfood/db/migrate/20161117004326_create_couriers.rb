class CreateCouriers < ActiveRecord::Migration[5.0]
  def change
    create_table :couriers do |t|
      t.string :username
      t.string :name
      t.string :password
      t.string :email
      t.string :phone_number

      t.timestamps
    end
  end
end
