# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Business.destroy_all
demo_user = User.create!(
    email: "demo_user1@aa.com",
    password: "demo123",
    first_name: "demo",
    last_name: "user",
    birthday: "01/01/0001"
)

b1 = Business.create!(
    name: 'Mcdonalds',
    address: '2191 Monterey Hwy',
    state: 'CA',
    city: 'San Jose',
    zipcode: 95125,
    opentime: 7,
    closetime: 4,
    phone_number: '(408) 279-0824',
    website: "www.mcdonalds.com",
    price: 1,
    latitude: 37.302950,
    longitude: -121.868400,
    categories: ['fast food', 'burgers', 'lunch', 'cheap', 'american']

)
b2 = Business.create!(
    name: 'Tan-Cha',
    address: '2706 Homestead Rd',
    state: 'CA',
    city: 'Santa Clara',
    zipcode: 95051,
    opentime: 11,
    closetime: 21,
    phone_number: '(408) 642-1384',
    website: "www.tan-cha.net",
    price: 2,
    latitude: 37.339040,
    longitude: -121.974500,
    categories: ['beverages', 'dessert', 'milk tea', 'boba', 'chinese']

)
b3 = Business.create!(
    name: 'Myungrang Hot Dog',
    address: '19540 Vallco Pkwy Ste 150',
    state: 'CA',
    city: 'Cupertino',
    zipcode: 95014,
    opentime: 11,
    closetime: 21,
    phone_number: '(408) 931-6487',
    price: 1,
    latitude: 37.324990,
    longitude: -122.010750,
    categories: ['fast food', 'korean', 'hot dogs', 'savory', 'sweet']

)
b4 = Business.create!(
    name: 'Daeho Kalbi Jjim & Beef Soup',
    address: '217 W Calaveras Blvd',
    state: 'CA',
    city: 'Milpitas',
    zipcode: 95035,
    opentime: 11,
    closetime: 21,
    phone_number: '(408) 770-3778',
    price: 2,
    latitude: 37.428420,
    longitude: -121.910210,
    categories: ['korean', 'dinner', 'meat', 'soup']

)
b5 = Business.create!(
    name: 'SomiSomi',
    address: '19540 Vallco Pkwy Ste 160',
    state: 'CA',
    city: 'Cupertino',
    zipcode: 95014,
    opentime: 12,
    closetime: 21,
    phone_number: '(408) 255-2114',
    website: "www.somisomi.com",
    price: 1,
    latitude: 37.324990,
    longitude: -122.010750,
    categories: ['dessert', 'sweet', 'soft serve', 'taiyaki', 'japanese']

)