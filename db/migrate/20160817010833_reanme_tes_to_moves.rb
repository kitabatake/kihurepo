class ReanmeTesToMoves < ActiveRecord::Migration[5.0]
  def change
    rename_table :tes, :moves
  end
end
