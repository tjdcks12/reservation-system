var extend = require('./egjs-extend');
var AjaxCall = require('./ajaxCall');
var productTemplate = require('./handlebars-templates/product-template.html');
module.exports = extend(eg.Component, {
    init: function ($element) {
        this.url = $('.lnk_logo').attr('href');
        this.$categoryBlock = $element;
        this.$productBlock = $('.section_event_lst');
        this.$anchor = $('.anchor.active');
        this.$rightUl = this.$productBlock.find('.lst_event_box').eq(0);
        this.$leftUl = this.$productBlock.find('.lst_event_box').eq(1);
        this.$moreButton = this.$productBlock.find('._more');
        this.$categoryBlock.on('click', this.toggleCategory.bind(this));
        this.categoryAjax = new AjaxCall();
        this.productAjax = new AjaxCall();
        this.page = 0;
        this.pageCount = 4;
        this.maxPage = this.$productBlock.find('.pink').data('product-count') / this.pageCount;
        this.categoryId = 1;
        this.emptyAndAddProducts(this.categoryId);
        this.$moreButton.on('click', this.moreProducts.bind(this));
        this.changeScroll();
    },
    toggleCategory: function (e) {
        var $x = $(e.target).closest('.anchor');
        if ($x.hasClass('anchor') && $x[0] !== this.$anchor[0]) {
            this.page = 0;
            this.$anchor.toggleClass('active', false);
            $x.toggleClass('active', true);
            this.$anchor = $x;
            this.categoryId = $x.closest('.item').data('category');
            this.changeCategory(this.categoryId);
            this.emptyAndAddProducts(this.categoryId);
        }
    },
    changeCategory: function (categoryId) {
        var categoryUrl = "/api/products/categories/" + categoryId + "/count";
        this.ajaxCall({url: categoryUrl}, this.categoryAjax, this.getCount);
    },
    changeScroll: function () {
        $(window).scroll(function (e) {
            if ($(document).height() - window.innerHeight - (window.scrollY / 10) < window.scrollY) {
                this.moreProducts();
            }
        }.bind(this));
    },
    moreProducts: function () {
        this.page++;
        this.changeProducts(this.categoryId, this.page);
    },
    emptyAndAddProducts: function (categoryId) {
        this.$leftUl.empty();
        this.$rightUl.empty();
        this.changeProducts(categoryId, this.page);
    },

    changeProducts: function (categoryId, page) {
        if (page <= this.maxPage) {
            var productUrl = "/api/products/categories/" + categoryId + "/pages/" + page;
            this.ajaxCall({url: productUrl}, this.productAjax, this.appendProducts);
        }
    },

    ajaxCall: function (obj, ajaxObj, doSomething) {
        ajaxObj.ajax(obj, doSomething.bind(this));
    },
    appendProducts: function (data) {
        this.getProductsByCategory(data);
    },
    getCount: function (data) {
        $('.pink').text(data + "개");
        this.maxPage = parseInt(data) / this.pageCount;
        this.categoryAjax.setCachedData(data);
    },
    getProductsByCategory: function (data) {
        var left = [];
        var right = [];
        for (var i = 0; i < data.length; i++) {
            data[i].fileUrl = this.url + "/file/img?file_id=" + data[i].fileId;
            if (i % 2 === 0) {
                left.push(data[i]);
            } else {
                right.push(data[i]);
            }
        }
        left = productTemplate({data: left});
        right = productTemplate({data: right});
        this.$leftUl.append(left);
        this.$rightUl.append(right);
        this.productAjax.setCachedData(data);
    }


});
