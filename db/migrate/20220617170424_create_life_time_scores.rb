class CreateLifeTimeScores < ActiveRecord::Migration[6.1]
  def change
    create_table :life_time_scores do |t|
      t.integer :score
      t.integer :user_id

      t.timestamps
    end
  end
end
