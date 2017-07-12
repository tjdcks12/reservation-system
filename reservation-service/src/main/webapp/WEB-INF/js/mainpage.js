/**
 * Created by ODOL on 2017. 7. 10..
 */
var API_ROOT_URL = '/api/';
var ROOT_URL = '/main/';
var CONTENT_TYPE_JSON = "application/json; charset=UTF-8";
var CONTENT_TYPE_DEFAULT = "application/x-www-form-urlencoded"
var GLOBAL_VAR = {
    //selector wrapping by jquery
    $headerClass: $('header.header_tit'),
    $lnkLogoClass: $('a.lnk_logo'),
    $btnMyClass: $('a.btn_my'),
    $eventTabLst: $('ul.event_tab_lst'),
    $lst_event_box: $('ul.lst_event_box'),

    //selector
    lnkLogoClass: "a.lnk_logo",

    //global
    $selectedCategory: $('ul.event_tab_lst>li:first-child').find("a")
};
var product = {
    id : undefined,
    categoryId : undefined,
    name : undefined,
    description : undefined,
    salesStart : undefined,
    salesEnd : undefined,
    salesFlag : undefined,
    event : undefined,
    createDate : undefined,
    modifyData : undefined
};

var productList = [];


(function (window) {

    console.log("window");

    var commonAPIs = {
        bindEventOnClick: function ($wrapperDom, targetDom, func) {
            $wrapperDom.on('click', targetDom, func);
        },
        ajax: function (data, url, dataType, type, contentType) {
            return $.ajax({
                data: JSON.stringify(data),
                url: url,
                dataType: dataType,
                type: type,
                contentType: ((contentType === undefined) ? CONTENT_TYPE_DEFAULT : CONTENT_TYPE_JSON)
            });
        },
    };
    //category select section
    var sectionEventTabFunctions = {
        init: function () {
            this.renderCategoryList();
            this.bindClickEvent();
        },
        bindClickEvent: function () {
            commonAPIs.bindEventOnClick(GLOBAL_VAR.$eventTabLst, "a.anchor", sectionEventTabFunctions.setActive.bind(this));
        },
        setActive: function (event) {
            event.stopPropagation();
            GLOBAL_VAR.$selectedCategory.removeClass("active");
            var $eventTarget = $(event.target).closest("li").find("a");
            $eventTarget.addClass("active");
            GLOBAL_VAR.$selectedCategory = $eventTarget;
        },
        renderCategoryList: function () {
            var getCategories = commonAPIs.ajax(undefined, API_ROOT_URL + "categories/", "json", "get", "json");
            getCategories.then(function (categories) {
                sectionEventTabFunctions.appendElement(categories);
            })
        },
        appendElement: function (elements) {
            for (var i in elements) {
                GLOBAL_VAR.$eventTabLst.append(sectionEventTabFunctions.categoryListElement(elements[i].id, elements[i].name));
            }
            GLOBAL_VAR.$selectedCategory = $('ul.event_tab_lst>li:first-child').find("a");
            GLOBAL_VAR.$selectedCategory.addClass("active");
            $('ul.event_tab_lst>li:last-child').find("a").addClass("last");

        },
        categoryListElement: function (id, name) {
            var element = '<li class="item" data-category="' + id + '">' +
                '<a class="anchor"> <span>' + name + '</span></a>' +
                '</li>';
            return element;
        }
    };

    //head section
    var headFunctions = {
        init: function () {
            this.bindClickEvent();
        },
        bindClickEvent: function () {
            commonAPIs.bindEventOnClick(GLOBAL_VAR.$headerClass, GLOBAL_VAR.lnkLogoClass, headFunctions.moveToLocation.bind(undefined, ROOT_URL));
        },
        moveToLocation: function (url) {
            document.location.href = url;
        }

    };

    headFunctions.init();
    sectionEventTabFunctions.init();


})(window);






