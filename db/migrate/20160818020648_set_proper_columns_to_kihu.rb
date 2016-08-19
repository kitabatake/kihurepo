class SetProperColumnsToKihu < ActiveRecord::Migration[5.0]
  def change
    add_column :kihus, :match_date, :datetime
    add_column :kihus, :rule, :string
    add_column :kihus, :hadicap, :string
    add_column :kihus, :sente, :string
    add_column :kihus, :gote, :string
  end
end
