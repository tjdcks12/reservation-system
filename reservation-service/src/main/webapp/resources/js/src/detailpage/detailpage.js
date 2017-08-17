window.$ = require('../../node_modules/jquery/dist/jquery');
window.jQuery = window.$;
require('../../node_modules/egjs/dist/eg');

var CarousellFlicking = require('../components/carouselFlicking');
var Detailmore = require('./detailmore');
var Lazyload = require('./lazyload');

var carouselFlicking = new CarousellFlicking($('.section_visual'), {
    'autoSlide':false,
    'circular': false,
    'countable': true
});

var detailmore = new Detailmore($('.section_store_details'));
var lazyload = new Lazyload($('.detail_area_wrap'));