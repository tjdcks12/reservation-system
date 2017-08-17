var extend = require('../components/egjs-extend');
require('../../node_modules/jquery-lazyload/jquery.lazyload');
module.exports = extend(eg.Component, {
    init: function ($root) {
        this.$root = $root;
        this.documentHeight = $(document).height();
        this.$window = $(window);
        this.SCROLL_LOADING_RATIO = 5;
        this.$content = $root.find('._lazyload');
        this.bindLazyLoading();
    },

    bindLazyLoading: function () {
        this.$content.lazyload();

    }

});