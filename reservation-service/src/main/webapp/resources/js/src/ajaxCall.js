var extend = require('./egjs-extend');
module.exports = extend(eg.Component, {

    init: function (params) {
        this.obj = {};
        Object.assign(this.obj,
            this.options = Object.assign({}, {
                method: 'GET',
                url: null,
                contentType: "applicationJSON",
                data: null

            }), params);

    },
    ajax: function(foo){
        console.log(this.obj);
        $.ajax(this.obj).then(foo);
    }

});