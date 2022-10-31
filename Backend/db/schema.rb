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

ActiveRecord::Schema[7.0].define(version: 2022_10_28_165455) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "job_applications", force: :cascade do |t|
    t.string "cover_letter"
    t.string "attachment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.string "job_title"
    t.string "company_name"
    t.text "job_description"
    t.date "deadline"
    t.text "job_type"
    t.text "required_skills"
    t.string "job_link"
    t.integer "admin_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_profiles", force: :cascade do |t|
    t.string "firstname"
    t.string "middlename"
    t.string "lastname"
    t.string "email"
    t.string "gender"
    t.string "age"
    t.integer "national_id"
    t.string "address"
    t.integer "phone"
    t.string "county"
    t.string "estate"
    t.integer "user_id"
    t.text "career_summary"
    t.text "experience_date"
    t.text "experience"
    t.text "education"
    t.text "education_date"
    t.text "skills_and_hobbies"
    t.string "languages"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
  end

end
