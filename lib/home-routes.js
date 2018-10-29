'use strict';

//3rd Party
const express = require('express');
const router = express.Router();

// Routes
router.get('/', homePage);

// Route Runner Functions
function homePage(request, response) {
  response.render('site', {page: './pages/index', title:'Welcome Home'});
}

// Export
module.exports = router;