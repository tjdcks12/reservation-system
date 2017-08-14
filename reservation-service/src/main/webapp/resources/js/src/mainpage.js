window.$ = require('../node_modules/jquery/dist/jquery');
window.jQuery = window.$;
require('../node_modules/egjs/dist/eg');

var CategoryList = require('./productList');
var CarousellFlicking = require('./carouselFlicking');

var carouselFlicking = new CarousellFlicking($('.group_visual'), {'autoSlide' : true});
var categoryList = new CategoryList($('.event_tab_lst'));

