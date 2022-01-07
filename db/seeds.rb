# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

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

mcdonalds1=URI.open('https://yep-seed.s3.amazonaws.com/Mcdonalds1.jpg')
mcdonalds2=URI.open('https://yep-seed.s3.amazonaws.com/Mcdonalds2.jpg')
mcdonalds3=URI.open('https://yep-seed.s3.amazonaws.com/Mcdonalds3.jpg')
mcdonalds4=URI.open('https://yep-seed.s3.amazonaws.com/Mcdonalds4.jpg')
mcdonalds5=URI.open('https://yep-seed.s3.amazonaws.com/Mcdonalds5.jpg')
b1.photos.attach(io: mcdonalds1, filename: 'Mcdonalds1.jpg')
b1.photos.attach(io: mcdonalds2, filename: 'Mcdonalds2.jpg')
b1.photos.attach(io: mcdonalds3, filename: 'Mcdonalds3.jpg')
b1.photos.attach(io: mcdonalds4, filename: 'Mcdonalds4.jpg')
b1.photos.attach(io: mcdonalds5, filename: 'Mcdonalds5.jpg')

tancha1=URI.open('https://yep-seed.s3.amazonaws.com/Tancha1.jpg')
tancha2=URI.open('https://yep-seed.s3.amazonaws.com/Tancha2.jpg')
tancha3=URI.open('https://yep-seed.s3.amazonaws.com/Tancha3.jpg')
tancha4=URI.open('https://yep-seed.s3.amazonaws.com/Tancha4.jpg')
tancha5=URI.open('https://yep-seed.s3.amazonaws.com/Tancha5.jpg')
b2.photos.attach(io: tancha1, filename:'Tancha1.jpg')
b2.photos.attach(io: tancha2, filename:'Tancha2.jpg')
b2.photos.attach(io: tancha3, filename:'Tancha3.jpg')
b2.photos.attach(io: tancha4, filename:'Tancha4.jpg')
b2.photos.attach(io: tancha5, filename:'Tancha5.jpg')

myung1=URI.open('https://yep-seed.s3.amazonaws.com/Myungrang1.jpg')
myung2=URI.open('https://yep-seed.s3.amazonaws.com/Myungrang2.jpg')
myung3=URI.open('https://yep-seed.s3.amazonaws.com/Myungrang3.jpg')
myung4=URI.open('https://yep-seed.s3.amazonaws.com/Myungrang4.jpg')
myung5=URI.open('https://yep-seed.s3.amazonaws.com/Myungrang5.jpg')
b3.photos.attach(io:myung1, filename: 'Myungrang1.jpg')
b3.photos.attach(io:myung2, filename: 'Myungrang2.jpg')
b3.photos.attach(io:myung3, filename: 'Myungrang3.jpg')
b3.photos.attach(io:myung4, filename: 'Myungrang4.jpg')
b3.photos.attach(io:myung5, filename: 'Myungrang5.jpg')

daeho1=URI.open('https://yep-seed.s3.amazonaws.com/Daeho1.jpg')
daeho2=URI.open('https://yep-seed.s3.amazonaws.com/Daeho2.jpg')
daeho3=URI.open('https://yep-seed.s3.amazonaws.com/Daeho3.jpg')
daeho4=URI.open('https://yep-seed.s3.amazonaws.com/Daeho4.jpg')
b4.photos.attach(io:daeho1, filename:'Daeho1.jpg')
b4.photos.attach(io:daeho2, filename:'Daeho2.jpg')
b4.photos.attach(io:daeho3, filename:'Daeho3.jpg')
b4.photos.attach(io:daeho4, filename:'Daeho4.jpg')

somi1 = URI.open('https://yep-seed.s3.amazonaws.com/Somi1.jpg')
somi2 = URI.open('https://yep-seed.s3.amazonaws.com/Somi2.jpg')
somi3 = URI.open('https://yep-seed.s3.amazonaws.com/Somi3.jpg')
somi4 = URI.open('https://yep-seed.s3.amazonaws.com/Somi4.jpg')
somi5 = URI.open('https://yep-seed.s3.amazonaws.com/Somi5.jpg')
b5.photos.attach(io: somi1, filename: 'Somi1.jpg')
b5.photos.attach(io: somi2, filename: 'Somi2.jpg')
b5.photos.attach(io: somi3, filename: 'Somi3.jpg')
b5.photos.attach(io: somi4, filename: 'Somi4.jpg')
b5.photos.attach(io: somi5, filename: 'Somi5.jpg')
