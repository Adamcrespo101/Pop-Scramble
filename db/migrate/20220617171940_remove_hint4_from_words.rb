class RemoveHint4FromWords < ActiveRecord::Migration[6.1]
  def change
    remove_column :words, :hint4
  end
end
