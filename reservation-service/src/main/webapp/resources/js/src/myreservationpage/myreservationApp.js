window.$ = require('../../node_modules/jquery/dist/jquery');
window.jQuery = window.$;
require('../../node_modules/egjs/dist/eg');

var MenuBar = require('./menuBar');
var CancelCard = require('./cancelCard');

var menuBar = new MenuBar($('.my_summary'));
var cancelCard = new CancelCard($("._toUse"));

