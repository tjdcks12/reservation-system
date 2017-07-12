var commonJS = {
  imgRolling: function(autoRollingClass, autoBoolean) {
    var findElement = $("." + autoRollingClass).find(" > ul");
    var itemLength = findElement.find(" > li").length;
    var btnPlay = autoBoolean;
    var autoState = true;
    var timer;
    var speed = 2000;
    var move = 338;

    timer = setInterval(moveNextSlide, speed);

    //프로모션 영역에 마우스 올려놓을시 Interval함수 정지(4초)
    findElement.on({

      "mouseenter": function() {
        clearInterval(timer);

        setTimeout(function() {
          clearInterval(timer);
          timer = setInterval(moveNextSlide, speed);
        }, 2000);
        //2초하면 2초기다렸다가 2초후에 함수가 발동되므로 4초
        //!isanimated ..
      },
      "mouseleave": function() {
        clearInterval(timer);
        timer = setInterval(moveNextSlide, speed);
      }
    });

    // > 버튼 클릭시
    $('.prev_inn').on({
      "click": function() {
        moveNextSlide();
      }
    });

    //<버튼클릭시
    $('.nxt_inn').on({
      "click": function() {
        movePrevSlide();
      }
    });


    function movePrevSlide() {
      var lastChild = findElement.children().filter(":last-child").clone(true);
      lastChild.prependTo(findElement);
      findElement.css("left", "-" + move + "px");
      findElement.children().filter(":last-child").remove();
      findElement.animate({
        "left": "0"
      }, "normal");
    }

    function moveNextSlide() {
      var firstChild = findElement.children().filter(":first-child").clone(true);
      firstChild.appendTo(findElement);
      findElement.children().filter(":first-child").remove();
      findElement.css("left", "0");
      findElement.animate({
        "left": "-" + move + "px"
      }, "normal");
    }
  }
}

$(document).ready(function() {
  commonJS.imgRolling("rollingList", true);
});
