module.exports = extend(eg.Component, {
    init : function ($root) {
        this.$root = $root;
        this.$ul = $root.find('ul');
        
    }

});