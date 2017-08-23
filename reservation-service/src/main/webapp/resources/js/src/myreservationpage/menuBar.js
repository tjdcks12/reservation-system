var extend = require('../components/egjs-extend');
module.exports = extend(eg.Component, {
    init: function ($root) {
        this.$card = $('.card');
        this.$rootBlock = $root;
        this.$summary = $root.find('.summary_board');
        this.$allLink = $root.find('.link_summary_board');
        this.$summary.on("click", ".item", this.addHandle.bind(this));
    },
    addHandle: function (e) {
        var $link = $(e.target).closest('.link_summary_board');
        var isClicked = $link.hasClass('on');

        if (!isClicked) {
            this.$allLink.toggleClass('on', false);
            $link.toggleClass('on', true);
            var reservationType = $link.data("reservation-type");
            this.changeCard(reservationType);
        }
    },

    changeCard: function (reservationType) {
        var isAll = (reservationType === 'all');
        this.$card.toggleClass('invisible', !isAll);
        $('.card.' + reservationType).toggleClass('invisible', false);


    }
});