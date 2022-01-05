class Changebusiness < ActiveRecord::Migration[7.0]
  def change
    remove_column :business, :categories
    add_column :business, :categories, :string, :array=>true
  end
end
