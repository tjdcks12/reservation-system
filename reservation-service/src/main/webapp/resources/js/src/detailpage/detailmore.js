var extend = require('../components/egjs-extend');
module.exports = extend(eg.Component, {
    init: function ($root) {
        this.$root = $root;
        this.$moreButton = $root.find('._open');
        this.$closeButton = $root.find('._close');
        this.$content = $root.find('.store_details');
        this.bindEvent();
    },
    bindEvent: function () {
        this.$moreButton.on('click', this.toggleButton.bind(this));
        this.$closeButton.on('click', this.toggleButton.bind(this));
    },
    toggleButton: function(e){
        e.preventDefault();
        this.$content.toggleClass('close3');
        this.$moreButton.toggleClass('invisible');
        this.$closeButton.toggleClass('invisible');
    }
})