class CreateKihus < ActiveRecord::Migration[5.0]
  def change
    create_table :kihus do |t|
      t.string :teban
      t.boolean :won

      t.timestamps
    end
  end
end
