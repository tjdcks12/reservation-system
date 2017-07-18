/**
 * Created by ODOL on 2017. 7. 17..
 */
(function ($) {

    $.GLOBAL_VAR = {
        //common var
        API_ROOT_URL: '/api/',
        ROOT_URL: '/main/',
        CONTENT_TYPE_JSON: "application/json; charset=UTF-8",
        CONTENT_TYPE_DEFAULT: "application/x-www-form-urlencoded",

        //selector wrapping by jquery
        $headerClass: $('header.header_tit'),
        $lnkLogoClass: $('a.lnk_logo'),
        $btnMyClass: $('a.btn_my'),
        $eventTabLst: $('ul.event_tab_lst'),
        $lstEventBox: $('ul.lst_event_box'),
        $ulVisualImg: $('ul.visual_img'),
        $pEventLstTxt: $('span.pink'),
        $btnMore: $('div.more>button'),
        $divSectionStoreDetails: $('div.section_store_details'),
        $divSectionEvent: $('div.section_event'),
        $divSectionReview: $('div.section_review_list'),

        //selector
        lnkLogoClass: "a.lnk_logo",

        //global
        $selectedCategory: $('ul.event_tab_lst>li:first-child').find("a"),
        activeCategory: 0,
        productList: [],
        offset: 0
    };

    $.commonAPIModule = {
        bindEventOnClick: function ($wrapperDom, targetDom, func) {
            $wrapperDom.on('click', targetDom, func);
        },

        ajax: function (data, url, dataType, type, contentType) {
            return $.ajax({
                data: JSON.stringify(data),
                url: url,
                dataType: dataType,
                type: type,
                contentType: ((contentType === undefined) ? $.GLOBAL_VAR.CONTENT_TYPE_DEFAULT : $.GLOBAL_VAR.CONTENT_TYPE_JSON)
            });
        },
        moveToLocation: function (url) {
            document.location.href = url;
        },
        templeToElement: function (template, context) {
            var templateScript = Handlebars.compile(template);
            return templateScript(context);
        }
    }

    $.headModule = {
        init: function ($wrapper, $target) {
            this.bindClickEvent($wrapper, $target);
        },

        bindClickEvent: function ($wrapper, $target) {
            $.commonAPIModule.bindEventOnClick($wrapper, $target, $.commonAPIModule.moveToLocation.bind(undefined, $.GLOBAL_VAR.ROOT_URL));
        }
    };
})($);