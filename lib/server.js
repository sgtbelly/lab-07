'use strict';

const superagent = require('superagent');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;
const API = 'http://localhost:3000';

// Set the view engine for templating
app.set('view engine', 'ejs');

// Statics
app.use( express.static('./public') );

// Dynamic Routes
app.get('/', homePage);
app.get('/list', listPage);

// Route Runners
function homePage(request, response) {
  response.render('site', {page: './pages/index', title:'Welcome Home'});
}

function listPage(request, response) {
  superagent.get( `${API}/api/v1/categories`)
    .then(data => {
      response.render('site', {page: './pages/list', title:'Listings', items: data.body});
    })
    .catch( error => {
      response.render('site', {page: './pages/error', title:'Error', error:error});
    });
}


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

