var extend = require('./egjs-extend');
module.exports = extend(eg.Component, {
    init: function ($element) {
        this.$categoryBlock = $element;
        this.$anchor = $('.anchor.active');
        this.$categoryBlock.on('click', this.toggleCategory.bind(this));
    },
    toggleCategory: function (e) {
        var $x = $(e.target).closest('.anchor');
        if ($x.hasClass('anchor')) {
            this.$anchor.toggleClass('active', false);
            $x.toggleClass('active', true);
            this.$anchor = $x;
        }
    }
});
