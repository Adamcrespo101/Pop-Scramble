class AddScrambledToWords < ActiveRecord::Migration[6.1]
  def change
    add_column :words, :scrambled, :string
  end
end
