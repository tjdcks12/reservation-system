window.$ = require('../node_modules/jquery/dist/jquery');
window.jQuery = window.$;
require('../node_modules/egjs/dist/eg');

var CarousellFlicking = require('./carouselFlicking');

var carouselFlicking = new CarousellFlicking($('.section_visual'), {
    'autoSlide':false,
    'circular': false,
    'countable': true
});
