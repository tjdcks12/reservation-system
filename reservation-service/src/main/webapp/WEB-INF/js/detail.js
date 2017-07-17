/**
 * Created by ODOL on 2017. 7. 17..
 */
(function (window) {
    var $h1Logo = $('h1.logo');
    var $aLnkLogo = $('a.lnk_logo');
    var API_URL = $.GLOBAL_VAR.API_ROOT_URL + "details";
    var PRODUCT_ID;
    var PRODUCT_DATA;
    var REVIEW_DATA;
    var OFF_SET = 3;

    var initModule = {
        init: function () {
            this.detailSectionTrigger();
        },
        detailSectionTrigger: function () {
            PRODUCT_ID = $(location).attr("href").split("/")[4];
            var getProductData = $.commonAPIModule.ajax(undefined, API_URL + "/" + PRODUCT_ID, "json", "get", "json");
            getProductData.then(function (data) {
                PRODUCT_DATA = data;
                detailModule.init();
                initModule.reviewSectionTrigger();
            });
        },
        reviewSectionTrigger: function () {
            var getReviewData = $.commonAPIModule.ajax(undefined, API_URL + "/review/" + PRODUCT_ID, "json", "get", "json");
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
            if(joinCount <= OFF_SET) {
                $('a.btn_review_more').hide();
            }
            reviewModule.appendElement(joinCount);
        },
        appendElement: function (count) {
            var avg = 0;
            for (var i = 0; i < REVIEW_DATA.length && i < OFF_SET ; i++) {
                var $target = $.GLOBAL_VAR.$divSectionReview.find('ul.list_short_review');
                var template = $('#shortReviewTemplate').html();
                var content = {
                    "imgSrc": REVIEW_DATA[i].saveFileName,
                    "imgCount": REVIEW_DATA[i].count,
                    "title": PRODUCT_DATA[0].name,
                    "review": REVIEW_DATA[i].comment,
                    "grade": REVIEW_DATA[i].score,
                    "userId": REVIEW_DATA[i].usernames
                }
                var element = $.commonAPIModule.templeToElement(template, content);
                $target.append(element);
                if (REVIEW_DATA[i].saveFileName === null) {
                    $('div.thumb_area').hide();
                }
                avg += REVIEW_DATA[i].score;
            }

            avg = avg/count;
            var per = avg*20;
            $('strong.text_value>span').text(avg);
            $('span.graph_mask>em.graph_value').css("width", per+"%");
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
            for (var i in PRODUCT_DATA) {
                var $target = $.GLOBAL_VAR.$ulVisualImg;
                var template = $('#visualTemplate').html();
                var content = {
                    "imgSrc": PRODUCT_DATA[i].saveFileName,
                    "name": PRODUCT_DATA[i].name
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
            $.commonAPIModule.bindEventOnClick($.GLOBAL_VAR.$divSectionStoreDetails, "a.bk_more", detailModule.toggleButton);
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
