
use harrykart
db.items.insertOne({name:"jio 40s",price:20000,rating:2.4,qty:210,sold:95})

db.items.insertMany([{name:"realme 40s",price:20000,rating:2.4,qty:110,sold:95},
{name:"jio 40s",price:2000,rating:3.4,qty:210,sold:105},
{name:"redmi note4",price:11000,rating:4.4,qty:210,sold:950}])