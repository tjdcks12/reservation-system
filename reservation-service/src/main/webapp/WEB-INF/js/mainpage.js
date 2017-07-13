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
    $wrap_event_box: $('div.wrap_event_box'),

    //selector
    lnkLogoClass: "a.lnk_logo",

    //global
    $selectedCategory: $('ul.event_tab_lst>li:first-child').find("a"),
    activeCategory: 0,
    reservationCount: 0,
    productList: [],
    offset: 0
};


(function (window) {

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
        getActiveProducts: function (activeCategoryId, productList) {
            var activeProducts = {
                count: 0,
                products: []
            };
            for (var i in productList) {
                if (activeCategoryId === 0 || productList[i].categoryId === activeCategoryId) {
                    activeProducts.count++;
                    activeProducts.products.push(productList[i]);
                }
            }
            return activeProducts;
        }
    };

    //event box
    var sectionEventBoxFunctions = {
        init: function () {
            this.renderProductList(GLOBAL_VAR.activeCategory, GLOBAL_VAR.offset, 4);

        },
        renderProductList: function (category, offset, limit) {
            //ajax를 통해 모든 공연을 가져와서 리스트로 보관
            var getProducts = commonAPIs.ajax(undefined, API_ROOT_URL + "products/" + offset + "/" + limit, "json", "get", "json");
            getProducts.then(function (productList) {
                GLOBAL_VAR.productList = productList;
                sectionEventBoxFunctions.appendElement(GLOBAL_VAR.activeCategory, GLOBAL_VAR.productList);
                GLOBAL_VAR.offset = 4;
            });
        },
        appendElement: function (activeCategoryId, productList) {
            var activeProducts = commonAPIs.getActiveProducts(activeCategoryId, productList);
            var products = activeProducts.products;
            for (var i = GLOBAL_VAR.offset in products) {
                var $target = ((i % 2 === 0) ? $('ul.left') : $('ul.right'));
                var element = sectionEventBoxFunctions.eventBoxElement(products[i].name, products[i].saveFileName, products[i].placeName, products[i].description);
                $target.append(element);
            }

        },
        eventBoxElement: function (imgAlt, imgSrc, smallLocation, pDescription) {
            // var element =
            //     '<li class=item>' +
            //     '<a href="#" class="item_book">' +
            //     '<div class="item_preview">' +
            //     '<img alt=' + imgAlt + 'class="img_thumb" src="' + imgSrc + '">' +
            //     '<span class="img_border"></span>' +
            //     '</div>' +
            //     '<div class="event_txt">' +
            //     '<h4 class="event_txt_tit"> <span>' + imgAlt + '</span>' +
            //     '<small class="sm">' + smallLocation + '</small> </h4>' +
            //     '<p class="event_txt_dsc">' + pDescription + '</p></div></a></li> ';
            var template = $('#productListTemplate').html();
            var templateScript = Handlebars.compile(template);
            var context = {
                "imgAlt": imgAlt,
                "imgSrc": imgSrc,
                "smallLocation": smallLocation,
                "pDescription": pDescription
            };
            var element = templateScript(context);
            return element;
        }
    }

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
            var $eventTarget = $(event.target).closest("li").find("a.anchor");
            $eventTarget.addClass("active");
            GLOBAL_VAR.$selectedCategory = $eventTarget;
            GLOBAL_VAR.activeCategory = $eventTarget.closest(".item").data("category");
        },
        renderCategoryList: function () {
            var getCategories = commonAPIs.ajax(undefined, API_ROOT_URL + "categories/", "json", "get", "json");
            getCategories.then(function (categories) {
                var defaultCategory = {
                    id : 0,
                    name : "전체"
                };
                var addCategory = [defaultCategory];
                sectionEventTabFunctions.appendElement(addCategory.concat(categories));
            })
        },
        appendElement: function (elements) {
            for (var i in elements) {
                GLOBAL_VAR.$eventTabLst.append(sectionEventTabFunctions.categoryListElement(elements[i].id, elements[i].name));
            }
            GLOBAL_VAR.$selectedCategory = $('ul.event_tab_lst>li:first-child').find("a.anchor");
            GLOBAL_VAR.$selectedCategory.addClass("active");
            $('ul.event_tab_lst>li:last-child').find("a.anchor").addClass("last");
        },
        categoryListElement: function (id, name) {
            var template = $('#categoryListTemplate').html();
            var templateScript = Handlebars.compile(template);
            var context = {
                "id": id,
                "name": name
            };
            var element = templateScript(context);
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
    sectionEventBoxFunctions.init();


})(window);






