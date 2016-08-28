class AddNumToMove < ActiveRecord::Migration[5.0]
  def change
    add_column :moves, :num, :integer
  end
end
