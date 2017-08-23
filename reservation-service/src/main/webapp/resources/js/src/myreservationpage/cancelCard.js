var extend = require('../components/egjs-extend');
module.exports = extend(eg.Component, {

    init: function ($_toUse) {
        this.$popup = $('.popup_booking_wrapper');
        this.$popUpTit = this.$popup.find(".pop_tit span");
        this.$btnConfirm = this.$popup.find('._confirm');
        this.$btnCancel = this.$popup.find('._cancel');
        this.bookingNumber = 0;
        $_toUse.on("click", this.bringData.bind(this));
        this.$btnCancel.on("click", this.closePopup.bind(this));
        this.$btnConfirm.on("click", this.postAjax.bind(this));
    },
    bringData: function (e) {
        var $cardDetail = $(e.target).closest(".card_detail");
        var title = $cardDetail.find('.tit').text();

        this.bookingNumber = $cardDetail.find('.booking_number').data('booking-number');

        this.$popUpTit.text(title);
        this.$popup.show();
    },
    closePopup: function () {
        this.$popup.hide();
    },
    postAjax: function () {
        var formData = {};
        formData.bookingNumber = this.bookingNumber;
        console.log(formData);

        $.ajax({
            type: 'POST',
            url: '/booked/cancel',
            data: formData,
            success: function (res) {
                alert('성공');
                location.href = '/booked/list';
            },
            error: function (res) {
                alert('실패했습니다.');
                $popup.hide();
            }
        });
    }
});