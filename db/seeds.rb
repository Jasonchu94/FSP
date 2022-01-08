# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'
#ApplicationRecordconnection.reset_pk_sequence!('table_name') reset primary keys

User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
Business.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('businesses')
Review.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('reviews')
demo_user = User.create!(
    email: "demo_user1@aa.com",
    password: "demo123",
    first_name: "demo",
    last_name: "user",
    birthday: "01/01/0001"
)

u1=User.create!(
    email: "user1",
    password: "password",
    first_name:"Isabelle",
    last_name:"Nunya",
    birthday: "01/01/0001"
)
u2=User.create!(
    email: "user2",
    password: "password",
    first_name:"Jonesy",
    last_name:"Jones",
    birthday: "01/01/0001"
)
u3=User.create!(
    email: "user23",
    password: "password",
    first_name:"Becky",
    last_name:"Lol",
    birthday: "01/01/0001"
)
u4=User.create!(
    email: "user24",
    password: "password",
    first_name:"Andrew",
    last_name:"Zeta",
    birthday: "01/01/0001"
)
u5=User.create!(
    email: "user25",
    password: "password",
    first_name:"Holy",
    last_name:"Moly",
    birthday: "01/01/0001"
)
u6=User.create!(
    email: "user6",
    password: "password",
    first_name:"Spooderman",
    last_name:"spidey",
    birthday: "01/01/0001"
)
u7=User.create!(
    email: "user27",
    password: "password",
    first_name:"Tom",
    last_name:"H",
    birthday: "01/01/0001"
)
u8=User.create!(
    email: "user28",
    password: "password",
    first_name:"Zendaya",
    last_name:"Jane",
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

reveiw1 = Review.create!(
    body: "this place was really awesome!",
    rating: 5,
    user_id: u1.id,
    business_id: b2.id
)
reveiw2 = Review.create!(
    body: "the cheese foam here is to die for",
    rating: 5,
    user_id: u2.id,
    business_id: b2.id
)
reveiw3 = Review.create!(
    body: "I received a half eaten burger here",
    rating: 1,
    user_id: u3.id,
    business_id: b1.id
)
reveiw4 = Review.create!(
    body: "Just the same burger place as usual, broken ice cream machine.",
    rating: 3,
    user_id: u4.id,
    business_id: b1.id
)
reveiw5 = Review.create!(
    body: "You can never go wrong with half mozarella half sausage, extra sugar!",
    rating: 5,
    user_id: u5.id,
    business_id: b3.id
)
reveiw6 = Review.create!(
    body: "Yummy snack but kind of pricey",
    rating: 4,
    user_id: u6.id,
    business_id: b3.id
)
reveiw7 = Review.create!(
    body: "OMG YOU NEED TO COME HERE AND GET THE GALBIJJIM WITH CHEESE!!!",
    rating: 5,
    user_id: u7.id,
    business_id: b4.id
)
reveiw8 = Review.create!(
    body: "Perfect dessert place after going to Daeho!!",
    rating: 5,
    user_id: u7.id,
    business_id: b5.id
)
reveiw9 = Review.create!(
    body: "Expect a long wait but it is more than worth it!",
    rating: 4.5,
    user_id: u8.id,
    business_id: b4.id
)
reveiw10 = Review.create!(
    body: "This place has cheese taiyaki, trust me I know it sounds weird but it's the best grilled cheese i've had!",
    rating: 4,
    user_id: u1.id,
    business_id: b5.id
)
reveiw11 = Review.create!(
    body: "the cheese pull at this place is just unbelievably satisfying",
    rating: 4,
    user_id: u2.id,
    business_id: b3.id
)