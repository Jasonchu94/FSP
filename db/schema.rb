# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_05_212718) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "business", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "state", null: false
    t.string "city", null: false
    t.integer "zipcode", null: false
    t.integer "opentime", null: false
    t.integer "closetime", null: false
    t.string "phone_number", null: false
    t.string "website"
    t.integer "price", null: false
    t.string "categories", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["address"], name: "index_business_on_address"
    t.index ["latitude"], name: "index_business_on_latitude"
    t.index ["longitude"], name: "index_business_on_longitude"
    t.index ["name"], name: "index_business_on_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.date "birthday", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
