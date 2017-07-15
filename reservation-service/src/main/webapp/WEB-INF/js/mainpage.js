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
    $lstEventBox: $('ul.lst_event_box'),
    $wrapEventBox: $('div.wrap_event_box'),
    $pEventLstTxt: $('span.pink'),
    $btnMore: $('div.more>button'),

    //selector
    lnkLogoClass: "a.lnk_logo",

    //global
    $selectedCategory: $('ul.event_tab_lst>li:first-child').find("a"),
    activeCategory: 0,
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

    //event box(product list)
    var sectionEventBoxFunctions = {
        init: function () {
            this.renderProductList(4);
        },

        renderProductList: function (limit) {
            var url;
            var category = GLOBAL_VAR.activeCategory;
            if(category !== 0 ) {
                url = API_ROOT_URL + "products/" + category + "/" + GLOBAL_VAR.offset + "/" +limit;
            } else {
                url  = API_ROOT_URL + "products/" + GLOBAL_VAR.offset + "/" +limit;
            }
            var getProducts = commonAPIs.ajax(undefined, url, "json", "get", "json");
            getProducts.then(function (products) {
                GLOBAL_VAR.productList = products;
                sectionEventBoxFunctions.appendElement(category, products);
                GLOBAL_VAR.offset = GLOBAL_VAR.offset + products.length;
            });
        },

        appendElement: function (activeCategoryId, products) {
            // var activeProducts = commonAPIs.getActiveProducts(activeCategoryId, productList);
            // var products = activeProducts.products;
            // for (var i = GLOBAL_VAR.offset; i < (limit + GLOBAL_VAR.offset); i++) {
            for(var i in products) {
                var $target = ((i % 2 === 0) ? $('ul.left') : $('ul.right'));
                var element = sectionEventBoxFunctions.eventBoxElement(
                    products[i].categoryId, products[i].name, products[i].saveFileName, products[i].placeName, products[i].description);
                $target.append(element);
            }
        },

        eventBoxElement: function (id, imgAlt, imgSrc, smallLocation, pDescription) {
            var template = $('#productListTemplate').html();
            var templateScript = Handlebars.compile(template);
            var context = {
                "id": id,
                "imgAlt": imgAlt,
                "imgSrc": imgSrc,
                "smallLocation": smallLocation,
                "pDescription": pDescription
            };
            var element = templateScript(context);
            return element;
        },

        removeListItem: function ($parentElement) {
            var target = $parentElement.find("li.item");
            $(target).remove();
            GLOBAL_VAR.offset = 0;
            // if (GLOBAL_VAR.activeCategory === 0) {
            //     $(target).show();
            // } else {
            //     $(target.filter(function (item) {
            //         return $(item).data("category") !== GLOBAL_VAR.activeCategory;
            //     })).hide();
            //
            //     $(target.filter(function (i, item) {
            //         return $(item).data("category") === GLOBAL_VAR.activeCategory;
            //     })).show();
            // }
        }
    }


    //category select section
    var sectionEventTabFunctions = {
        init: function () {
            this.renderCategoryList();
            this.bindClickEvent();
            this.setActiveProductsCount();
        },

        bindClickEvent: function () {
            commonAPIs.bindEventOnClick(GLOBAL_VAR.$eventTabLst, "a.anchor", sectionEventTabFunctions.setActive.bind(this));
            commonAPIs.bindEventOnClick(GLOBAL_VAR.$btnMore, sectionEventBoxFunctions.renderProductList.bind(undefined, 2));
        },

        setActive: function (event) {
            event.stopPropagation();
            GLOBAL_VAR.$selectedCategory.removeClass("active");
            var $eventTarget = $(event.target).closest("li").find("a.anchor");
            $eventTarget.addClass("active");
            GLOBAL_VAR.$selectedCategory = $eventTarget;
            GLOBAL_VAR.activeCategory = $eventTarget.closest(".item").data("category");
            sectionEventBoxFunctions.removeListItem(GLOBAL_VAR.$lstEventBox);
            sectionEventBoxFunctions.renderProductList(4);
            // sectionEventTabFunctions.setActiveProductsCount();
        },

        setActiveProductsCount: function () {
            var count = 0;
            // if (GLOBAL_VAR.activeCategory === 0) {
            //     count = GLOBAL_VAR.productList.length;
            // } else {
            //     for (var i in GLOBAL_VAR.productList) {
            //         count = ((GLOBAL_VAR.productList[i].categoryId === GLOBAL_VAR.activeCategory ) ? count+1 : count);
            //     }
            // }
            var getCount = commonAPIs.ajax(undefined, API_ROOT_URL + "products/count", "json", "get", "json");
            getCount.then(function (count) {
                GLOBAL_VAR.$pEventLstTxt.text(count + "개");
            });
        },

        renderCategoryList: function () {
            var getCategories = commonAPIs.ajax(undefined, API_ROOT_URL + "categories/", "json", "get", "json");
            getCategories.then(function (categories) {
                var defaultCategory = {
                    id: 0,
                    name: "전체"
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






