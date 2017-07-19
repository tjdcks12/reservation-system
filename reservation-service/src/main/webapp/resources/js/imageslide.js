var slideModule = (function() {
  var imgRolling = function(autoRollingClass, autoBoolean, move) {
    var findElement = $("." + autoRollingClass).find(" > ul");
    var itemLength = findElement.find(" > li").length;
    var btnPlay = autoBoolean;
    var autoState = true;
    var timer;
    var speed = 2000;
    var check = 1;


    if ($('.rollingList').find('li').length > 1) {
      timer = setInterval(moveNextSlide, speed);
      // 프로모션 영역에 마우스 올려놓을시 Interval함수 정지(4초)
      findElement.on({
        "mouseenter": function() {
          clearInterval(timer);
          setTimeout(function() {
            clearInterval(timer);
            timer = setInterval(moveNextSlide, speed);
          }, 2000);
          // 2초하면 2초기다렸다가 2초후에 함수가 발동되므로 4초
          // !isanimated ..
        },
        "mouseleave": function() {
          clearInterval(timer);
          timer = setInterval(moveNextSlide, speed);
        }
      });


      // > 버튼 클릭시
      $('.prev_inn').on({
        "click": function() {
          movePrevSlide();
        }
      });

      // <버튼클릭시
      $('.nxt_inn').on({
        "click": function() {
          moveNextSlide();
        }
      });
    } else {
      $('.nxt_inn').css('display', 'none');
      $('.prev_inn').css('display', 'none');
    }

    function movePrevSlide() {
      if(check===0){
        check=$('.rollingList').find('li').length;
      }
      $('.num.on').text((--check)%($('.rollingList').find('li').length)+1);
      var lastChild = findElement.children().filter(":last-child").clone(true);
      lastChild.prependTo(findElement);
      findElement.css("left", "-" + move + "px");
      findElement.children().filter(":last-child").remove();
      findElement.animate({
        "left": "0"
      }, "normal");
    }

    function moveNextSlide() {
      $('.num.on').text((++check)%($('.rollingList').find('li').length)+1);
      var firstChild = findElement.children().filter(":first-child").clone(true);
      firstChild.appendTo(findElement);
      findElement.children().filter(":first-child").remove();
      findElement.css("left", "0");
      findElement.animate({
        "left": "-" + move + "px"
      }, "normal");
    }
  }
  return {
    imgRolling: imgRolling
  }
})();

$(document).ready(function() {
  slideModule.imgRolling("rollingList", true, $('.rollingList').attr('value'));
});
