'use strict';

// 3rd Party libs
const express = require('express');
const methodOverride = require('method-override');

// Esoteric Libs
const categoryRoutes = require('./categories-routes.js');
const homeRoutes = require('./home-routes.js');

const app = express();

const PORT = process.env.PORT || 8080;



// Set the view engine for templating
app.set('view engine', 'ejs');

//middleware
app.use(express.urlencoded({extended:true}));
app.use( methodOverride( (request, response) => {
  if ( request.body && typeof request.body === 'object' && '_method' in request.body) {
    let method = request.body._method;
    delete request.body._method;
    return method;
  }
}));

// Statics
app.use( express.static('./public') );

// Dynamic Routes
app.use(homeRoutes);
app.use(categoryRoutes);

// www sever listener
app.listen(PORT, ()=> console.log(`Server up on ${PORT}`));

// Exports
module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

