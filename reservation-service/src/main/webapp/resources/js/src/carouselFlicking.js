var extend = require('./egjs-extend');
module.exports = extend(eg.Component, {
    init: function ($root, options) {
        this.bindVariables($root, options);
        this.bindSlideEvent(options);
        this.isCircular = options.circular || false;
        this.bindOptions(options);
    },
    bindVariables: function ($root){
        this.$root = $root;
        this.$ul = $root.find('ul');
        this.$next = $root.find('._next');
        this.$prev = $root.find('._prev');
        this.picWidth = this.$ul.find('li').width();
        this.dX = 0;
        this.isClicked = false;
        this.moveRatio = 5;
        this.isTouched = false;
        this.isMouseOverd = false;
    },
    bindOptions: function(options){
        if(options.autoSlide) {
            this.autoSlide();
        }
        if(options.countable){
            this.count = 1;
            this.MAX_COUNT = this.$root.find('._max-count').data('product-max-count');
            this.$curCount = this.$root.find('._current-count');
        }
    },
    bindSlideEvent: function () {
        this.$next.on('click', this.nextPic.bind(this));
        this.$prev.on('click', this.prevPic.bind(this));
        this.$ul.on('mousedown touchstart', this.startMouseTouch.bind(this));
        this.$ul.on('mousemove touchmove', this.moveMouseTouch.bind(this));
        this.$ul.on('mouseup touchend', this.endMouseTouch.bind(this));
    },
    startMouseTouch: function (e) {
        e.preventDefault();
        if (e.type === "touchstart") {
            e = e.originalEvent.changedTouches[0];
            this.identifier = e.identifier;
        }
        this.startX = e.clientX;
        this.isTouched = true;
    },
    moveMouseTouch: function (e) {

        if (e.type === "touchmove") {
            e = e.originalEvent.changedTouches[0];
            if (e.identifier !== this.identifier) {
                return;
            }
        }
        if (this.isTouched) {
            this.currentX = e.clientX;
            this.dX = this.currentX - this.startX;
            this.$ul.css({"transform": "translateX(" + this.dX + "px)"});
        }
    },
    endMouseTouch: function (e) {
        if (e.type === "touchEnd") {
            e = e.originalEvent.changedTouches[0];
            if (e.identifier !== this.identifier) {
                return;
            }
        }
        if (this.dX > this.picWidth / this.moveRatio) {
            this.prevPic();
        } else if (this.dX < -this.picWidth / this.moveRatio) {
            this.nextPic();
        } else{
            this.$ul.animate({"transform": "translateX(" + 0 + "px)"});
            this.dX = 0;
        }
        this.isTouched = false;
    },
    countFunction: function(subSum){
        if(this.count) {
            if(subSum === '+')
                this.count++;
            else if(subSum === '-')
                this.count--;
            if(!this.boundaryCheck()){
                return false;
            }
            this.$curCount.text(this.count);

        }
        return true;
    },
    boundaryCheck: function(){
        if(this.count > this.MAX_COUNT){
            this.count--;
            this.$ul.animate({"transform": "translateX(" + 0 + "px)"});
            this.dX = 0;
            return false;
        }
        else if(this.count < 1){
            this.count++;
            this.$ul.animate({"transform": "translateX(" + 0 + "px)"});
            this.dX = 0;
            return false;
        }
        return true;
    },
    nextPic: function (e) {
        if (!this.isClicked) {
            if(!this.countFunction('+')){
                return;
            }
            this.isClicked = true;
            var firstPic = this.$ul.find('li:first-child');
            this.$ul.append(firstPic[0].outerHTML);
            this.$ul.animate({"transform": "translateX(" + (-this.picWidth) + "px)"}, this.nextMoveEnd.bind(this, firstPic));
        }

    },
    nextMoveEnd: function(firstPic){
        firstPic.remove();
        this.$ul.css({"transform": "translateX(" + 0 + "px)"});
        this.isTouched = false;
        this.isClicked = false;

    },
    prevPic: function (e) {
        if (!this.isClicked) {
            if(!this.countFunction('-')){
                return;
            }
            this.isClicked = true;
            var lastPic = this.$ul.find('li:last-child');
            this.$ul.prepend(lastPic[0].outerHTML);
            this.$ul.css({"transform": "translateX(" + (-this.picWidth + this.dX) + "px)"});
            this.dX = 0;
            this.$ul.animate({"transform": "translateX(" + (0) + "px)"}, this.prevMoveEnd.bind(this,lastPic));
        }
    },
    prevMoveEnd: function(lastPic){
        lastPic.remove();
        this.isTouched = false;
        this.isClicked = false;
    },
    autoSlide: function () {
        this.timerId = setInterval(this.nextPic.bind(this), 2000);
        this.$root.on('mouseover', this.setTimer.bind(this));
    },
    manageTimer: function () {
        clearInterval(this.timerId);
        this.timerId = setInterval(this.nextPic.bind(this), 2000)
    },
    setTimer: function (e) {
        if (!this.isMouseOvered) {
            this.isMouseOverd = true;
            clearInterval(this.timerId);
            setTimeout(this.manageTimer.bind(this), 2000);
        }
    }

});