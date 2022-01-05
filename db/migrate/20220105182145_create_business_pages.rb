class CreateBusinessPages < ActiveRecord::Migration[7.0]
  def change
    create_table :business_pages do |t|

      t.string :name, null: false
      t.string :address, null: false
      t.string :state, null: false
      t.string :city, null: false
      t.integer :zipcode, null: false
      t.integer :opentime, null: false
      t.integer :closetime, null: false
      t.string :phone_number, null: false
      t.string :website
      t.integer :price, null: false
      t.string :categories, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.timestamps
    end

    add_index :business_pages, :name
    add_index :business_pages, :address
    add_index :business_pages, :latitude
    add_index :business_pages, :longitude
  end
end
