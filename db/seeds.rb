# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

demo_user = User.create!(
    email: "demo_user@aa.com",
    password: "demo123",
    first_name: "demo",
    last_name: "user",
    birthday: "01/01/0001"
)