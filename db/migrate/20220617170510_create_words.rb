class CreateWords < ActiveRecord::Migration[6.1]
  def change
    create_table :words do |t|
      t.string :answer
      t.string :hint1
      t.string :hint2
      t.string :hint3
      t.string :hint4

      t.timestamps
    end
  end
end
