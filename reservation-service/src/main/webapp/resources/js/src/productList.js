var extend = require('./egjs-extend');
var AjaxCall = require('./ajaxCall');
var productTemplate = require('./handlebars-templates/product-template.html');
module.exports = extend(eg.Component, {

    init: function ($element) {
        this.$categoryBlock = $element;
        this.$productBlock = $('.lst_event_box');
        this.$anchor = $('.anchor.active');
        this.$categoryBlock.on('click', this.toggleCategory.bind(this));
        this.ajaxObject = new AjaxCall();
        this.page = 0;
    },
    toggleCategory: function (e) {
        var $x = $(e.target).closest('.anchor');
        var categoryId;
        if ($x.hasClass('anchor') && $x[0] !== this.$anchor[0]) {
            this.page = 0;
            this.$anchor.toggleClass('active', false);
            $x.toggleClass('active', true);
            this.$anchor = $x;
            categoryId = $x.closest('.item').data('category');
            this.changeCategory(categoryId);
            this.changeProducts(categoryId, this.page);
        }
    },
    changeCategory: function(categoryId){
        var categoryUrl = "/api/products/categories/" + categoryId + "/count";
        this.ajaxCall({url: categoryUrl}, this.getCount);
    },
    changeProducts: function(categoryId, page){
        var productUrl = "/api/products/categories/" + categoryId + "/pages/"+page;
        this.ajaxCall({url: productUrl}, this.appendProducts);

    },

    ajaxCall: function(obj, foo){
        this.ajaxObject.setParams(obj);
        this.ajaxObject.ajax(foo.bind(this));
    },
    appendProducts: function(data){
        this.getProductsByCategory(data);
        // console.log(data);
    },
    getCount: function (data) {
        $('.pink').text(data + "개");
        this.ajaxObject.setCachedData(data);
    },
    getProductsByCategory: function (data) {
        for(var i = 0; i<data.length; i++){

            console.log(productTemplate(data[i]));
        }
    }


});
