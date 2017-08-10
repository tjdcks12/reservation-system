require('../node_modules/jquery/dist/jquery');
require('../node_modules/egjs/dist/eg');

var CategoryList = require('./productList');
var CarousellFlicking = require('./carouselFlicking');

var carouselFlicking = new CarousellFlicking();
var categoryList = new CategoryList($('.event_tab_lst'));

