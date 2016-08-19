class ChangeKihusTebanStringtoReference < ActiveRecord::Migration[5.0]
  def change
    remove_column :kihus, :teban
    add_reference :kihus, :teban
  end
end
