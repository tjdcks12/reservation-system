/**
 * Created by ODOL on 2017. 7. 17..
 */
(function (window) {
    var $h1Logo = $('h1.logo');
    var $aLnkLogo = $('a.lnk_logo');
    var API_URL = $.GLOBAL_VAR.API_ROOT_URL + "details";
    var productId;
    var PRODUCT_DATA;
    var REVIEW_DATA;
    var OFF_SET = 3;

    var initModule = {
        init: function () {
            this.detailSectionTrigger();
        },
        detailSectionTrigger: function () {
            productId = location.href.split("/")[4];
            var getProductData = $.commonAPIModule.ajax(undefined, API_URL + "/" + productId, "json", "get", "json");
            getProductData.then(function (data) {
                PRODUCT_DATA = data;
                detailModule.init();
                initModule.reviewSectionTrigger();
            });
        },
        reviewSectionTrigger: function () {
            var getReviewData = $.commonAPIModule.ajax(undefined, API_URL + "/review/" + productId, "json", "get", "json");
            getReviewData.then(function (data) {
                REVIEW_DATA = data;
                reviewModule.init();
            });
        }
    }

    var reviewModule = {
        init: function () {
            this.renderReview();
        },
        renderReview: function () {
            var joinCount = REVIEW_DATA.length;
            $.GLOBAL_VAR.$divSectionReview.find('em.green').text(joinCount + "건");
            if (joinCount <= OFF_SET) {
                $('a.btn_review_more').hide();
            }
            reviewModule.appendElement(joinCount);
        },
        appendElement: function (count) {
            var avg = 0;
            var reviewData = REVIEW_DATA;
            for (var i = 0; i < reviewData.length && i < OFF_SET; i++) {
                var $target = $.GLOBAL_VAR.$divSectionReview.find('ul.list_short_review');
                var template = $('#shortReviewTemplate').html();
                var content = {
                    "imgSrc": reviewData[i].saveFileName,
                    "imgCount": reviewData[i].count,
                    "title": PRODUCT_DATA[0].name,
                    "review": reviewData[i].comment,
                    "grade": reviewData[i].score,
                    "userId": reviewData[i].usernames
                }
                var element = $.commonAPIModule.templeToElement(template, content);
                $target.append(element);
                if (reviewData[i].saveFileName === null) {
                    $('div.thumb_area').hide();
                }
                avg += reviewData[i].score;
            }

            avg = avg / count;
            var per = avg * 20;
            $('strong.text_value>span').text(avg);
            $('span.graph_mask>em.graph_value').css("width", per + "%");
        }
    }

    var detailModule = {
        init: function () {
            this.renderVisual();
            this.eventInfo();
            this.bindEvent();
        },
        renderVisual: function () {
            var pagination = PRODUCT_DATA.length;
            $('span.off>span').text(pagination);
            $('p.dsc').text(PRODUCT_DATA[0].content);
            detailModule.appendElement();
        },
        appendElement: function () {
            var productData = PRODUCT_DATA;
            for (var i in productData) {
                var $target = $.GLOBAL_VAR.$ulVisualImg;
                var template = $('#visualTemplate').html();
                var content = {
                    "imgSrc": productData[i].saveFileName,
                    "name": productData[i].name
                };
                var element = $.commonAPIModule.templeToElement(template, content);
                $target.append(element);
            }
        },
        eventInfo: function () {
            if (PRODUCT_DATA[0].event !== undefined) {
                $.GLOBAL_VAR.$divSectionEvent.find("div.in_dsc").text(PRODUCT_DATA[0].event);
            } else {
                $.GLOBAL_VAR.$divSectionEvent.hide();
            }
        },
        bindEvent: function () {
            $.GLOBAL_VAR.$divSectionStoreDetails.on("click", "a.bk_more", detailModule.toggleButton);
        },
        toggleButton: function () {
            var $open = $('a._open');
            var $close = $('a._close');
            var $details = $('div.store_details');
            $details.toggleClass("close3");
            if ($details.hasClass("close3")) {
                $close.hide();
                $open.show();
            } else {
                $open.hide();
                $close.show();

            }
        }
    };

    $.headModule.init($h1Logo, $aLnkLogo);
    initModule.init();

})(window);
