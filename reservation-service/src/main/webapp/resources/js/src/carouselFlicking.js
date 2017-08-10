var extend = require('./egjs-extend');
module.exports = extend(eg.Component, {
    init: function ($root) {
        this.$root = $root;
        this.$ul = $root.find('ul');
        this.$next = $root.find('._next');
        this.$prev = $root.find('._prev');
        this.picWidth = this.$ul.find('li').width();
        this.isClicked = false;
        this.moveRatio = 5;
        this.isTouched = false;
        this.bindSlideEvent();
    },
    bindSlideEvent: function(){
        this.$next.on('click', this.nextPic.bind(this));
        this.$prev.on('click', this.prevPic.bind(this));
        this.$ul.on('mousedown touchstart',this.startMouseTouch.bind(this));
        this.$ul.on('mousemove touchmove', this.moveMouseTouch.bind(this));
        this.$ul.on('moveup touchend', this.endMouseTouch.bind(this));
    },
    startMouseTouch: function(e){
        if(e.type === "touchstart") {
            e = e.originalEvent.changedTouches[0];
            this.identifier = e.identifier;
        }
        this.startX = e.clientX;
        this.isTouched = true;
    },
    moveMouseTouch: function(e){
        if(e.type === "touchmove"){
            e = e.originalEvent.changedTouches[0];
            if(e.identifier !== this.identifier){
                return;
            }
        }
        if(this.isTouched) {
            this.currentX = e.clientX;
            this.dX = this.currentX - this.startX;

            if (this.dX > this.picWidth / this.moveRatio) {
                this.prevPic();
                return;
            } else if (this.dX < -this.picWidth / this.moveRatio) {
                this.nextPic();
                return;
            } else {
                this.$ul.css({"transform": "translateX(" + this.dX + "px)"});
            }
        }
    },
    endMouseTouch: function(e){
        if(e.type === "touchEnd"){
            e = e.originalEvent.changedTouches[0];
            if(e.identifier !== this.identifier){
                return;
            }
        }
        this.endX = e.clientX;
        this.$ul.animate({"transform": "translateX(" + 0 + "px)"});
    },
    nextPic: function(e){
        if(!this.isClicked) {
            this.isClicked = true;
            var firstPic = this.$ul.find('li:first-child');
            this.$ul.append(firstPic[0].outerHTML);
            this.$ul.animate({"transform": "translateX(" + (-this.picWidth) + "px)"}, function () {
                firstPic.remove();
                this.$ul.css({"transform": "translateX(" + 0 + "px)"});
                this.isTouched = false;
                this.isClicked = false;
            }.bind(this));
        }
    },
    prevPic: function(e){
        if(!this.isClicked) {
            this.isClicked = true;
            var lastPic = this.$ul.find('li:last-child');
            this.$ul.prepend(lastPic[0].outerHTML);
            this.$ul.css({"transform": "translateX(" + (-this.picWidth+this.dX) + "px)"});
            this.$ul.animate({"transform": "translateX(" + (0) + "px)"}, function () {
                lastPic.remove();
                this.isTouched = false;
                this.isClicked = false;
            }.bind(this));
        }
    }


});