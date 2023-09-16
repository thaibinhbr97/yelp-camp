const mongoose = require('mongoose');
const cities = require('./cities.js');
const { places, descriptors } = require('./seedHelpers.js');
const Campground = require('../models/campground.js');
require('dotenv').config();

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 500; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30) + 10;
        const camp = new Campground({
            // YOUR USER ID
            author: '64f8a61a7730b3894b5b10f2',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, ipsam sunt vero commodi alias reiciendis praesentium aspernatur, impedit reprehenderit natus voluptates beatae quis nemo, voluptate cumque illum possimus sed fugiat?',
            price,
            geometry: {
                type: 'Point',
                coordinates: [cities[random1000].longitude, cities[random1000].latitude]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/doeov7urm/image/upload/v1694541423/YelpCamp/itvnfktgdrdc07psllw6.jpg',
                    filename: 'YelpCamp/itvnfktgdrdc07psllw6'
                },
                {
                    url: 'https://res.cloudinary.com/doeov7urm/image/upload/v1694541425/YelpCamp/fkx3kzghyuldz127rw7t.jpg',
                    filename: 'YelpCamp/fkx3kzghyuldz127rw7t'
                },
                {
                    url: 'https://res.cloudinary.com/doeov7urm/image/upload/v1694541426/YelpCamp/i753svzeectf5vubeamj.jpg',
                    filename: 'YelpCamp/i753svzeectf5vubeamj'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})