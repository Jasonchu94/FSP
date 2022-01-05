class Change < ActiveRecord::Migration[7.0]
  def change
    rename_table :business_pages, :business
  end
end
