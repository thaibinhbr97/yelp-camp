# ⛺ yelp-camp

<a href="https://yelp-camp-jgt3.onrender.com/" target="_blank">
 <p align="center">
  <img src="https://res.cloudinary.com/doeov7urm/image/upload/v1694901885/Screenshot_2023-09-16_at_6.00.21_PM_tmrw4p.png?w=350" alt="Campground">
  </p>
</a>

**Click at the picture or https://yelp-camp-jgt3.onrender.com/ to start the Render server**

YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, an account must be registered through Register. Then, you can log in to view all campgrounds and play around with it.

This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.  

## Features
* Users can view, create, edit, and remove their campground
* Users can edit and remove their review

## Built With

- [Node.js](https://nodejs.org) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [express](https://expressjs.com//) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - The database for modern applications
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [ejs](https://ejs.co/) - Embedded JavaScript templating

## Run it locally
1. Install [mongodb](https://www.mongodb.com/)
2. Create a cloudinary account to get an API key and secret code

```
git clone https://github.com/thaibinhbr97/yelp-camp.git
cd yelp-camp
npm install
```

Create a .env file (or just export manually in the terminal) in the root of the project and add the following:  

```
CLOUDINARY_CLOUD_NAME='<name>'
CLOUDINARY_KEY='<key>'
CLOUDINARY_SECRET='<secret>'
MAPBOX_TOKEN='<token>'
DB_URL='<url>'
SECRET='<secret>'
```

Run ```mongo``` in another terminal and ```node app.js``` in the terminal with the project.  

Then go to [localhost:3000](http://localhost:3000/).