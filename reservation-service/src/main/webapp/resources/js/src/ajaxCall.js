var extend = require('./egjs-extend');
module.exports = extend(eg.Component, {
    init: function () {
        this.cachedData = {};
    },
    setParams: function (params) {
        this.obj = {};
        Object.assign(this.obj,
            this.options = Object.assign({}, {
                method: 'GET',
                url: null,
                contentType: "applicationJSON",
                data: null
            }), params);
    },
    ajax: function (foo) {
        var cachedData = this.cachedData[this.obj.url];
        if (cachedData) {
            return foo(cachedData);
        }
        $.ajax(this.obj).then(foo);
    },
    setCachedData: function(url, data){
        this.cachedData[url] = data;
    }
});