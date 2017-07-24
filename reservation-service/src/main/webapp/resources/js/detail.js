(function() {

  var DETAIL_NAME = $('.visual_txt_inn');
  var DETAIL_PRODUCT_IMAGE_BLOCK = $('.visual_img');
  var DETAIL_NUMBER = $('#container').attr('data-detail-number');

  var DETAIL_CONTENT_BLOCK = $('.store_details');
  var EVENT_INFO_BOX = $('.event_info_box');
  var DETAIL_EVENT_BLOCK = $('.event_info');
  var GRADE_BLOCK = $('.grade_area');
  var DETAIL_REVIEW_BLOCK = $('.list_short_review');
  var detail_product_name;

  var DETAIL_INFO_BLOCK = $('.section_info_tab');
  var limit = 0;



  //detail 가져오기
  var getData = (function() {
    $.ajax({
      url: '/api/detail/' + DETAIL_NUMBER,
      contentType: 'application/json',
      type: 'GET',
      success: function(res) {

        DETAIL_CONTENT_BLOCK.find('.dsc').text(res[0].description);
        if (!res[0].event) {
          EVENT_INFO_BOX.empty();
        }
        DETAIL_EVENT_BLOCK.find('.in_dsc').text(res[0].event);
        detail_product_name = res[0].name;

        $('.btn_goto_home').attr('href', res[0].homepage);
        $('.btn_goto_tel').attr('href', 'tel:' + res[0].tel);
        $('.btn_goto_mail').attr('href', 'mailto:' + res[0].email);
        $('.btn_goto_path').attr('href', 'http://map.naver.com');


        $('.bk_btn').on('click', function() {
          if (res[0].saleFlag)
            alert('매진');
        })
      }
    });


  })();



  var getProductImage = (function() {
    var source = $('#image-template').html();
    var template = Handlebars.compile(source);
    $.ajax({
      url: '/api/detail/' + DETAIL_NUMBER + '/productImage',
      contentType: 'application/json',
      type: 'GET',
      success: function(res) {
        var appendProductImage = template(res);
        DETAIL_PRODUCT_IMAGE_BLOCK.append(appendProductImage);
        //첫번째 이미지만 레이어문구
        $('.visual_txt_inn').find('span').eq(0).html(detail_product_name);
      }

    })
  })();


  //comment 가져오기
  var getComment = function() {

    var appendComment;
    var promises = [];
    var source = $('#item-template').html();
    var template = Handlebars.compile(source);
    $.ajax({
      url: '/api/detail/' + DETAIL_NUMBER + '/comment/limit/' + limit,
      contentType: 'application/json',
      type: 'GET',
      success: function(res) {

        $.each(res, function(i) {
          var date = res[i].createDate;
          var id = res[i].userName;
          res[i].createDate = date.split(' ')[0];
          res[i].userName = id.substr(0,2);
          promises.push(res[i]);
          var comment_number = res[i].id;
          //count가져오기
          $.ajax({
            url: '/api/detail/' + DETAIL_NUMBER + '/' + comment_number + '/commentImage/count',
            contentType: 'application/json',
            type: 'GET',
            success: function(result) {
              promises[i].count = result;
              //console.log(promises);
              appendComment = template(promises[i]);
              DETAIL_REVIEW_BLOCK.append(appendComment);
              DETAIL_REVIEW_BLOCK.find('.resoc_name').text(detail_product_name);
            }

          })
        })
      }
    })
  }
  //이부분 어떻게 개선할지?.. 어떻게 모듈화?..
  getComment();
  limit++;

  $('.btn_review_more').on('click', function(e) {
    e.preventDefault();
    getComment();
    limit++;
  });



  $('.thumb_area').on('click', function(){
    alert("하하");
    window.open(src, "newWin", "width="+screen.availWidth+",height="+screen.availHeight)
  });

  //score 가져오기
  var getScore = (function() {
    $.ajax({
      url: '/api/detail/' + DETAIL_NUMBER + '/score',
      contentType: 'application/json',
      type: 'GET',
      success: function(res) {
        var star = (res / 5) * 100;
        GRADE_BLOCK.find('.text_value>span').text(res);
        GRADE_BLOCK.find('.graph_value').css('width', star + '%');
      }
    })
  })();





  //commentCount 가져오기
  var getCount = (function() {
    $.ajax({
      url: '/api/detail/' + DETAIL_NUMBER + '/count',
      contentType: 'application/json',
      type: 'GET',
      success: function(res) {
        GRADE_BLOCK.find('.green').text(res + '건');
      }
    })
  })();


  //imageProduct 갯수 가져오기
  var getProductImageCount = (function() {
    $.ajax({
      url: '/api/detail/' + DETAIL_NUMBER + '/productImage/count',
      contentType: 'application/json',
      type: 'GET',
      success: function(res) {
        $('.off').text('/ ' + res);
      }
    })
  })();



  var ClickDetailAndPath = (function() {
    DETAIL_INFO_BLOCK.find('.anchor').on('click', function(e) {

      DETAIL_INFO_BLOCK.find('.anchor').removeClass('active');
      $(this).addClass('active');

      var showLocation = function() {
        $('.detail_location').removeClass('hide');
        $('.detail_area_wrap').addClass('hide');
      }

      var showDetail = function() {
        $('.detail_area_wrap').removeClass('hide');
        $('.detail_location').addClass('hide');
      }

      $(this).closest('.item').hasClass('_path') ? showLocation() : showDetail()
      e.preventDefault();
    })
  })();

  var getPathDetail = (function() {
    var STORE_BLOCK = $('.store_info');
    var DETAIL_BLOCK = $('.detail_location');

    $.ajax({
        url: '/api/detail/' + DETAIL_NUMBER + '/displayInfo',
        contentType: 'application/json',
        type: 'GET',
        success: function(res) {
          STORE_BLOCK.find('.store_addr_bold').text(res[0].place_lot);
          STORE_BLOCK.find('.addr_old_detail').text(res[0].place_street);
          STORE_BLOCK.find('.addr_detail').text(res[0].place_name);
          STORE_BLOCK.find('.item_rt').text(res[0].tel);
          DETAIL_BLOCK.find('.store_location').attr('href', 'http://map.naver.com/?query='+res[0].place_street);

        }
    });
  })();
  $('.btn_goto_share').on('click', function share() {
    var url = encodeURI(encodeURIComponent(location.href));
    var title = encodeURI(detail_product_name);
    var shareURL = "http://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
    document.location = shareURL;
  });


//더보기 onClick
$('.bk_more').on('click', function() {
if ((DETAIL_CONTENT_BLOCK).hasClass('close3')) {
  $('._open').css('display', 'none');
  $('._close').css('display', 'block');
  DETAIL_CONTENT_BLOCK.removeClass('close3');
} else {
  $('._open').css('display', 'block');
  $('._close').css('display', 'none');
  DETAIL_CONTENT_BLOCK.addClass('close3');
}
});

$(document).ready(function() {
 popConfig();
});

function popConfig(){
 $(".btn_open").click(layerOpen);
 $(".btn_close").click(layerClose);
}
function layerOpen(){
 $("#layer_pop").css("display","block");
 var tx = ($(window).width()-$("#layer_pop .pop_cont").width())/2;
 var ty = ($(window).height()-$("#layer_pop .pop_cont").height())/2;
 $("#layer_pop .pop_cont").css({left:tx+"px",top:ty+"px"});
 $("body").css("overflow","hidden");
}
function layerClose(){
 $("#layer_pop").css("display","none");
 $("body").css("overflow","auto");
}



})();
