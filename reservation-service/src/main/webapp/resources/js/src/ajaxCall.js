var extend = require('./egjs-extend');
module.exports = extend(eg.Component, {
    init: function () {
        this.cachedData = {};
        this.obj = {};
    },
    ajax: function (params, doSomething) {
        Object.assign(this.obj,
            this.options = Object.assign({}, {
                method: 'GET',
                url: null,
                contentType: "application/json",
                data: null
            }), params);
        var d = new Date();
        var nowTime = d.getTime();
        var cachedData = this.cachedData[this.obj.url];
        if (cachedData && nowTime-cachedData.time < 300000) {
            return doSomething(cachedData.data);
        }
        $.ajax(this.obj).then(doSomething);
    },
    setCachedData: function(data){
        var d = new Date();
        var saveTime = d.getTime();
        this.cachedData[this.obj.url] = {'data': data, 'time': saveTime};
    }
});