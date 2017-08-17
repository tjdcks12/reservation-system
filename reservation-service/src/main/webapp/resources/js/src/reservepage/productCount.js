var extend = require('../components/egjs-extend');
var productCountTemplate = require('../handlebars-templates/product-count-template.html');
module.exports = extend(eg.Component, {
    init: function ($root) {
        this.$root = $root;
        this.$ticketBox = $root.find('._ticket');
        this.$ticketBox.on('click', this.clickButtonEvent.bind(this));
        this.countObj = {
            totalCount : 0,
            adultCount : 0,
            teenagerCount : 0,
            childCount : 0
        };
        this.$totalCountBoard = $root.find('._total_count_board');
    },
    clickButtonEvent: function (e) {
        e.preventDefault();
        var $target = $(e.target);
        if($target.hasClass('_plus')) {
            this.changeCount($target, '+');

        }
        if($target.hasClass('_minus')) {
            this.changeCount($target, '-');

        }
    },
    changeCount: function ($target, option) {
        this.$currentBox = $target.closest('.qty');
        this.$countControlInput = this.$currentBox.find('.count_control_input');
        this.$minusButton = this.$currentBox.find('._minus');
        this.$totalPrice = this.$currentBox.find('.total_price');
        this.$individualPrice = this.$currentBox.find('.individual_price');
        this.price = parseInt(this.$currentBox.data('price'));
        this.currentValue = parseInt(this.$countControlInput.val());
        this.reservationType = parseInt(this.$currentBox.data('reservation-type'));
        if (option === '+') {
            if (this.currentValue === 0) {
                this.togglePriceButtonColor();
            }
            this.$countControlInput.val(++this.currentValue);
            this.$totalPrice.text(this.addComma(this.price * this.currentValue));
            this.changeCountByTypeChange(this.reservationType);
        }
        if (option === '-' && this.currentValue > 0) {
            if(this.currentValue === 1) {
                this.togglePriceButtonColor();
            }
            this.$countControlInput.val(--this.currentValue);
            this.$totalPrice.text(this.addComma(this.price * this.currentValue));
            this.changeCountByTypeChange(this.reservationType);
        }
    },
    changeCountByTypeChange : function (reservationType) {
        switch (reservationType) {
            case 1:
                this.countObj.adultCount = this.currentValue;
                break;
            case 2:
                this.countObj.teenagerCount = this.currentValue;
                break;
            case 3:
                this.countObj.childCount = this.currentValue;
                break;
        }
        this.countObj.totalCount = this.countObj.adultCount + this.countObj.teenagerCount + this.countObj.childCount;
        this.$totalCountBoard.data('total-count', this.countObj.totalCount);
        this.$totalCountBoard.text(productCountTemplate(this.countObj));
        this.$totalCountBoard.trigger('change');
    },
    togglePriceButtonColor : function () {
        this.$minusButton.toggleClass('disabled');
        this.$countControlInput.toggleClass('disabled');
        this.$individualPrice.toggleClass('on_color');
    },
    addComma : function (value) {
        return Number(value).toLocaleString('en');
    }
});