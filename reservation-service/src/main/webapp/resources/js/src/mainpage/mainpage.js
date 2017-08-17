window.$ = require('../../node_modules/jquery/dist/jquery');
window.jQuery = window.$;
require('../../node_modules/egjs/dist/eg');

var ProductList = require('./productList');
var CarousellFlicking = require('../components/carouselFlicking');

var carouselFlicking = new CarousellFlicking($('.group_visual'), {'autoSlide' : true});
var productList = new ProductList($('.event'));

