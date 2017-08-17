var extend = require('../components/egjs-extend');
module.exports = extend(eg.Component, {
    init: function($root){
        this.initVariable($root);
        this.bindEvent();
    },
    initVariable: function($root){
        this.$reservationInfo = $root;
        this.phoneRegExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
        this.emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        this.nameRegExp = /^[가-힣0-9]{2,4}|[a-zA-Z0-9]{2,10}\s[a-zA-Z0-9]{2,10}$/;
        this.validBitmask = 0;
        this.TICKET_BIT = 1;
        this.NAME_BIT = 2;
        this.PHONE_BIT = 4;
        this.AGREE_BIT = 8;
        this.PASS_BIT = 15;
    },
    bindEvent: function(){
        this.$reservationInfo.on('change' ,this.validationCheck.bind(this));
    },
    validationCheck: function(e){

        if(e.target.className === '_total_count_board'){
            if( $('.'+e.target.className).data().totalCount > 0 ) {
                this.validBitmask |= this.TICKET_BIT;
            }
            else {
                this.validBitmask &= this.PASS_BIT - this.TICKET_BIT;
            }
        }
        else if(e.target.className === 'text'){

            if(this.nameRegExp.test(e.target.value)){
                this.validBitmask |= this.NAME_BIT;
            }
            else{
                this.validBitmask &= this.PASS_BIT - this.NAME_BIT;
            }
        }

        else if(e.target.className === 'tel'){
            if(this.phoneRegExp.test(e.target.value)){
                this.validBitmask |= this.PHONE_BIT;
            }
            else{
                this.validBitmask &= this.PASS_BIT - this.PHONE_BIT;
            }
        }
        else if(e.target.className === 'chk_agree'){
            if($(e.target).prop('checked')){
                this.validBitmask |= this.AGREE_BIT;
            }
            else{
                this.validBitmask &= this.PASS_BIT - this.AGREE_BIT;
            }
        }
    }

});
