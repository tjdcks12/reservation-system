var extend = require('./egjs-extend');
var ajaxCall = require('./ajaxCall');
//var productTempleate = require('./handlebars-templates/product-template.html');
module.exports = extend(eg.Component, {

    init: function ($element) {
        this.countData = {};
        this.$categoryBlock = $element;
        this.$anchor = $('.anchor.active');
        this.$categoryBlock.on('click', this.toggleCategory.bind(this));
    },
    toggleCategory: function (e) {
        var $x = $(e.target).closest('.anchor');
        var categoryId;
        if ($x.hasClass('anchor')) {
            this.$anchor.toggleClass('active', false);
            $x.toggleClass('active', true);
            this.$anchor = $x;
            categoryId = $x.closest('.item').data('category');
            this.ajaxCall("/api/products/categories/"+categoryId+"/count");
            //var new ajaxCall();
        }

    },
    ajaxCall: function(url) {
        var count = this.countData[url];
        if (count) {
            $('.pink').text(count+"개");
        } else {
            var ajaxData = new ajaxCall({url:url});

            ajaxData.ajax(this.foo);
            // this.countData[url] = data;
            //
            // $('.pink').text(data+"개");

        }
    },
    foo: function(data){
        console.log(data);
    }


});
