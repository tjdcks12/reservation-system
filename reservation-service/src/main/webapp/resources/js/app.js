var productBlock = $('.wrap_event_box');
var productDetailBlock = $('.img_border');
var categoryListBlock = $('.event_tab_lst');
var countBlock = $('.pink');
var moreBlock = $('.btn');


var DataGetModule = (function() {
  var limit = 0;
  var maxHeight = $(document).height();
  var currentScroll = $(window).scrollTop() + $(window).height();

  var getMoredata = function() {
    limit++;
    if ($('.active').find('span').text() === "전체") {
      $.ajax({
        url: '/api/products/limit/' + limit,
        contentType: 'application/json',
        tpye: 'GET',
        success: function(res) {
          fillProduct(res);
        }
      });
    } else {
      var categoryId = $('.active').closest('li').attr('id').split('#')[1];
      $.ajax({
        url: '/api/products/' + categoryId + '/limit/' + limit,
        contentType: 'application/json',
        tpye: 'GET',
        success: function(res) {
          fillProduct(res);
        }
      });
    }
  };

  //Product 가져옴
  var createProduct = function() {
    limit = 0;
    $.ajax({
      url: '/api/products/limit/0',
      type: 'GET',
      dataType: 'json',
      success: function(res) {
        fillProduct(res);
      }
    });
    getCount();
  };




  //response에 맞게 Product 채우는 함수
  var fillProduct = function(res) {
    //핸들바사용
    var source = $('#item-template').html();
    var template = Handlebars.compile(source);
    $.each(res, function(i) {

      var appendProduct = template(res[i]);

      if (i % 2 == 0) {

        productBlock.find('ul:first-child').append(appendProduct);
      } else {
        productBlock.find('ul:first-child+ul').append(appendProduct);
      }
    });
  };

  //count 갯수 받아오는 함수
  var getCount = function() {
    $.ajax({
      url: '/api/products/count',
      contentType: 'application/json',
      type: 'GET',
      success: function(res) {
        countBlock.text(res + '개');
      }
    });
  };

  //category별 count 갯수 받아오는 함수
  var getCountByCate = function(categoryId) {
    $.ajax({
      url: '/api/products/count/' + categoryId,
      contentType: 'application/json',
      type: 'GET',
      success: function(res) {
        countBlock.text(res + '개');
      }
    });
  }

  //더보기 누를때 콜백함수
  moreBlock.on('click', function() {
    getMoredata();
  });

  //스크롤 더보기
  $(document).ready(function() {
    $(document).scroll(function() {
      if (maxHeight - currentScroll < 80) {
        getMoredata();
      }
    });
  });

  //카테고리 요소 클릭
  categoryListBlock.find('.anchor').on('click', function() {
    limit = 0;
    //전체클릭할시
    if ($(this).find('span').text() === "전체") {
      $.ajax({
        url: '/api/products/limit/0',
        contentType: 'application/json',
        tpye: 'GET',
        success: function(res) {
          productBlock.find('ul').empty();
          fillProduct(res);
          getCount();
        }

      });
    }
    //전체 아닌거 클릭시
    else {
      var categoryId = $(this).closest('li').attr('id').split('#')[1];
      $.ajax({
        url: '/api/products/' + categoryId + '/limit/0',
        contentType: 'application/json',
        success: function(res) {
          productBlock.find('ul').empty();
          fillProduct(res);
          getCountByCate(categoryId);
        }

      });
    }

    //클릭시 active 클래스 추가, 나머지 제거
    categoryListBlock.find('.anchor').removeClass('active');
    $(this).addClass('active');
  })

  return createProduct();
})();


var eventModule = (function() {

  //수정버튼
  $('.modifyButton').click(function() {
    modifyCategory($('select[name=modify_cate] option:selected').attr('id'), $('#name').val());
  })
  //NAVER 로고 클릭시 이동
  $('.lnk_logo').click(function() {
    window.location.href = "/";
  })
  $('.btn_my').click(function() {
    window.location.href = "/reservation";
  })
})();






var categoryControl = (function() {
  //카테고리 삭제
  function deleteCategory(id) {
    $.ajax({
      url: '/categories/delete',
      data: 'id=' + id,
      success: function(result) {
        $('.categoryList[id=' + id + ']').remove();
        $('.categoryList_update[id=' + id + ']').remove();
      }
    });

  }

  $('.categoryList').click(function() {
    deleteCategory($('.categoryList').attr('id'));
  })

  //카테고리 수정
  function modifyCategory(id, name) {
    $.ajax({
      url: '/categories/modify',
      data: 'id=' + id + '&name=' + name,
      success: function(result) {
        $('.categoryList[id=' + id + ']').text(name);
        $('.categoryList_update[id=' + id + ']').text(name);
      }

    });
  }
})();
