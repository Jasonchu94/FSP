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
    opentime: 6,
    closetime: 22,
    phone_number: '(408) 279-0824',
    website: "www.mcdonalds.com",
    price: "$",
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
    price: "$$",
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
    price: "$",
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
    price: "$$$",
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
    price: "$",
    latitude: 37.324990,
    longitude: -122.010750,
    categories: ['dessert', 'sweet', 'soft serve', 'taiyaki', 'japanese']

)
b6 = Business.create!(
    name: '99 Chicken',
    address: '2781 El Camino Real',
    state: 'CA',
    city: 'Santa Clara',
    zipcode: 95051,
    opentime: 12,
    closetime: 21,
    phone_number: '(408) 244-5599',
    website: "www.99chicken4u.com",
    price: "$$",
    latitude: 37.352970,
    longitude:-121.977060,
    categories: ['Korean', 'Chicken Wings', 'Salad']

)
b7 = Business.create!(
    name: 'Philz Coffee',
    address: '118 Paseo De San Antonio Walk',
    state: 'CA',
    city: 'San Jose',
    zipcode: 95112,
    opentime: 6,
    closetime: 18,
    phone_number: '(408) 971-4212',
    website: "www.philzcoffee.com",
    price: "$",
    latitude: 37.331650,
    longitude: -121.891060,
    categories: ['Coffee', 'Tea']

)
b8 = Business.create!(
    name: 'Ramen Nagi',
    address: '2855 Stevens Creek Blvd ',
    state: 'CA',
    city: 'Santa Clara',
    zipcode: 95014,
    opentime: 11,
    closetime: 21,
    phone_number: '(408) 123-4567',
    website: "www.ramennagiusa.com",
    price: "$$",
    latitude: 37.325520,
    longitude: -121.945648,
    categories: ['Japanese', 'Ramen']

)
b9 = Business.create!(
    name: 'Pho 90 Degree',
    address: '999 Story Rd Ste 9090',
    state: 'CA',
    city: 'San Jose',
    zipcode: 95122,
    opentime: 10,
    closetime: 23,
    phone_number: '(408) 993-9090',
    website: "www.pho90degree.com",
    price: "$$",
    latitude: 37.331450,
    longitude: 121.856500,
    categories: ['Vietnamse', 'Noodles', 'Rice']

)
b10 = Business.create!(
    name: '10 Butchers Korean BBQ',
    address: '595 E El Camino Real',
    state: 'CA',
    city: 'Sunnyvale',
    zipcode: 94087,
    opentime: 11,
    closetime: 21,
    phone_number: '(669) 454-3263',
    website: "www.10butchers.net",
    price: "$$$",
    latitude: 37.324990,
    longitude: -122.010750,
    categories: ['Korean','Barbeque', 'Wine Bars']

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

chicken1=URI.open('https://yep-seed.s3.amazonaws.com/99Chicken1.jpg')
chicken2=URI.open('https://yep-seed.s3.amazonaws.com/99Chicken2.jpg')
chicken3=URI.open('https://yep-seed.s3.amazonaws.com/99Chicken3.jpg')
chicken4=URI.open('https://yep-seed.s3.amazonaws.com/99Chicken4.jpg')
chicken5=URI.open('https://yep-seed.s3.amazonaws.com/99Chicken5.jpg')
b6.photos.attach(io: chicken1, filename: '99Chicken1.jpg')
b6.photos.attach(io: chicken2, filename: '99Chicken2.jpg')
b6.photos.attach(io: chicken3, filename: '99Chicken3.jpg')
b6.photos.attach(io: chicken4, filename: '99Chicken4.jpg')
b6.photos.attach(io: chicken5, filename: '99Chicken5.jpg')

philz1=URI.open('https://yep-seed.s3.amazonaws.com/Philz1.jpg')
philz2=URI.open('https://yep-seed.s3.amazonaws.com/Philz2.jpg')
philz3=URI.open('https://yep-seed.s3.amazonaws.com/Philz3.jpg')
philz4=URI.open('https://yep-seed.s3.amazonaws.com/Philz4.jpg')
philz5=URI.open('https://yep-seed.s3.amazonaws.com/Philz5.jpg')
b7.photos.attach(io: philz1, filename: 'Philz1.jpg')
b7.photos.attach(io: philz2, filename: 'Philz2.jpg')
b7.photos.attach(io: philz3, filename: 'Philz3.jpg')
b7.photos.attach(io: philz4, filename: 'Philz4.jpg')
b7.photos.attach(io: philz5, filename: 'Philz5.jpg')

ramen1=URI.open('https://yep-seed.s3.amazonaws.com/Ramen1.jpg')
ramen2=URI.open('https://yep-seed.s3.amazonaws.com/Ramen2.jpg')
ramen3=URI.open('https://yep-seed.s3.amazonaws.com/Ramen3.jpg')
ramen4=URI.open('https://yep-seed.s3.amazonaws.com/Ramen4.jpg')
ramen5=URI.open('https://yep-seed.s3.amazonaws.com/Ramen5.jpg')
b8.photos.attach(io: ramen1, filename: 'Ramen1.jpg')
b8.photos.attach(io: ramen2, filename: 'Ramen2.jpg')
b8.photos.attach(io: ramen3, filename: 'Ramen3.jpg')
b8.photos.attach(io: ramen4, filename: 'Ramen4.jpg')
b8.photos.attach(io: ramen5, filename: 'Ramen5.jpg')

pho1=URI.open('https://yep-seed.s3.amazonaws.com/Pho1.jpg')
pho2=URI.open('https://yep-seed.s3.amazonaws.com/Pho2.jpg')
pho3=URI.open('https://yep-seed.s3.amazonaws.com/Pho3.jpg')
pho4=URI.open('https://yep-seed.s3.amazonaws.com/Pho4.jpg')
pho5=URI.open('https://yep-seed.s3.amazonaws.com/Pho5.jpg')
b9.photos.attach(io: pho1, filename: 'Pho1.jpg')
b9.photos.attach(io: pho2, filename: 'Pho2.jpg')
b9.photos.attach(io: pho3, filename: 'Pho3.jpg')
b9.photos.attach(io: pho4, filename: 'Pho4.jpg')
b9.photos.attach(io: pho5, filename: 'Pho5.jpg')

butchers1=URI.open('https://yep-seed.s3.amazonaws.com/10Butchers1.jpg')
butchers2=URI.open('https://yep-seed.s3.amazonaws.com/10Butchers2.jpg')
butchers3=URI.open('https://yep-seed.s3.amazonaws.com/10Butchers3.jpg')
butchers4=URI.open('https://yep-seed.s3.amazonaws.com/10Butchers4.jpg')
b10.photos.attach(io: butchers1, filename: '10Butchers1.jpg')
b10.photos.attach(io: butchers2, filename: '10Butchers2.jpg')
b10.photos.attach(io: butchers3, filename: '10Butchers3.jpg')
b10.photos.attach(io: butchers4, filename: '10Butchers4.jpg')


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