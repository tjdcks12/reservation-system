var extend = require('../components/egjs-extend');
module.exports = extend(eg.Component, {
    init: function ($card) {
        this.all = $card.length;
        this.toUse = $card.filter
        $root.on("change", function (e, v) {
            this.$
        }).bind(this);
    },
    addHandle: function (e) {
        var $link = $(e.target).closest('.link_summary_board');
        var isClicked = $link.hasClass('on');
        if (!isClicked) {
            this.$allLink.toggleClass('on', false);
            $link.toggleClass('on', true);
            var reservationType = $link.data("reservation-type");
            $link.trigger("change", {
                reservationType: reservationType
            });
        }
    }
});