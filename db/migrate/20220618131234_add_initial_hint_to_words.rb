class AddInitialHintToWords < ActiveRecord::Migration[6.1]
  def change
    add_column :words, :initial_hint, :string
  end
end
