class Changeitem < ActiveRecord::Migration[7.0]
  def change
    change_column :businesses, :price, :string
  end
end
