class SetProperColumnsToMoves < ActiveRecord::Migration[5.0]
  def change
    add_column :moves, :koma, :string
    add_column :moves, :from_x, :integer
    add_column :moves, :from_y, :integer
    add_column :moves, :to_x, :integer
    add_column :moves, :to_y, :integer
    add_column :moves, :time, :integer
    add_column :moves, :naru, :boolean
    add_column :moves, :utsu, :boolean

    remove_column :moves, :content
  end
end
