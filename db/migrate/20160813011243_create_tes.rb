class CreateTes < ActiveRecord::Migration[5.0]
  def change
    create_table :tes do |t|
      t.string :content
      t.string :comment
      t.references :kihu

      t.timestamps
    end
  end
end
