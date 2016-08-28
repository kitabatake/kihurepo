# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160828081811) do

  create_table "kihus", force: :cascade do |t|
    t.boolean  "won"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "match_date"
    t.string   "rule"
    t.string   "handicap"
    t.string   "sente"
    t.string   "gote"
    t.integer  "teban_id"
    t.index ["teban_id"], name: "index_kihus_on_teban_id"
  end

  create_table "moves", force: :cascade do |t|
    t.string   "comment"
    t.integer  "kihu_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "koma"
    t.integer  "from_x"
    t.integer  "from_y"
    t.integer  "to_x"
    t.integer  "to_y"
    t.integer  "time"
    t.boolean  "naru"
    t.boolean  "utsu"
    t.integer  "num"
    t.index ["kihu_id"], name: "index_moves_on_kihu_id"
  end

end
