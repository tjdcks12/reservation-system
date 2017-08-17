window.$ = require('../../node_modules/jquery/dist/jquery');
window.jQuery = window.$;
require('../../node_modules/egjs/dist/eg');

var ProductCount = require('./productCount');
var ReservationCheck = require('./reservationCheck');

var productCount = new ProductCount($('.ct_wrap'));
var reservationCheck = new ReservationCheck($('.section_booking_form'));

