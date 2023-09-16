const mongoose = require('mongoose');
const cities = require('./cities.js');
const { places, descriptors } = require('./seedHelpers.js');
const Campground = require('../models/campground.js');
require('dotenv').config();

const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-camp';

mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const images = [
    {
        url: 'https://res.cloudinary.com/doeov7urm/image/upload/w_900,h_600/v1694540425/YelpCamp/xs0oodlxhbpsy7gr6xuk.jpg',
        filename: 'YelpCamp/xs0oodlxhbpsy7gr6xuk.jpg'
    },
    {
        url: 'https://res.cloudinary.com/doeov7urm/image/upload/w_900,h_600/v1694541426/YelpCamp/i753svzeectf5vubeamj.jpg',
        filename: 'YelpCamp/i753svzeectf5vubeamj.jpg'
    },
    {
        url: 'https://res.cloudinary.com/doeov7urm/image/upload/w_900,h_600/v1694541423/YelpCamp/itvnfktgdrdc07psllw6.jpg',
        filename: 'YelpCamp/itvnfktgdrdc07psllw6.jpg'
    },
    {
        url: 'https://res.cloudinary.com/doeov7urm/image/upload/w_900,h_600/v1694540062/YelpCamp/amtukew9zhp9mz5ohitg.jpg',
        filename: 'YelpCamp/amtukew9zhp9mz5ohitg.jpg'
    },
    {
        url: 'https://res.cloudinary.com/doeov7urm/image/upload/v1694900615/YelpCamp/patrick-hendry-eDgUyGu93Yw-unsplash_tkjcoc.jpg',
        filename: 'YelpCamp/patrick-hendry-eDgUyGu93Yw-unsplash_tkjcoc.jpg'
    },
    {
        url: 'https://res.cloudinary.com/doeov7urm/image/upload/v1694901101/YelpCamp/alfred-boivin-XoM0eYSXWMs-unsplash_wedx8v.jpg',
        filename: 'YelpCamp/alfred-boivin-XoM0eYSXWMs-unsplash_wedx8v.jpg'
    }
];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30) + 10;
        const camp = new Campground({
            // YOUR USER ID
            author: '65046b516d74aecee6238986',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, ipsam sunt vero commodi alias reiciendis praesentium aspernatur, impedit reprehenderit natus voluptates beatae quis nemo, voluptate cumque illum possimus sed fugiat?',
            price,
            geometry: {
                type: 'Point',
                coordinates: [cities[random1000].longitude, cities[random1000].latitude]
            },
            images: shuffle(images)
        })
        await camp.save();
    }
    console.log("Finished seeding data into databases");
}

seedDB().then(() => {
    mongoose.connection.close();
})