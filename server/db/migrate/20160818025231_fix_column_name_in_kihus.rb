class FixColumnNameInKihus < ActiveRecord::Migration[5.0]
  def change
    rename_column :kihus, :hadicap, :handicap
  end
end
