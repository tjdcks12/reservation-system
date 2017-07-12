(function(window) {
  'use strict';


  var limit = 0;
  var productBlock = $('.wrap_event_box');
  var categoryListBlock = $('.event_tab_lst');
  var countBlock = $('.pink');
  var moreBlock = $('.btn');


//스크롤
$(document).ready(function () {
$(document).scroll(function() {
var maxHeight = $(document).height();
var currentScroll = $(window).scrollTop() + $(window).height();

if (maxHeight <= currentScroll + 100) {

getMoredata();

}
})
});



  //더보기 누를때 콜백함수
  moreBlock.on('click', function() {
    getMoredata();
  });


  function getMoredata() {
limit++;
    if ($('.active').find('span').text() === "전체") {
      $.ajax({
        url: '/api/products/limit/' + limit,
        contentType: 'application/json',
        tpye: 'GET',
        success: function(res) {
          fillProduct(res);
        }
      }).error(function() {
        alert('more get fail');
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
      }).error(function() {
        alert('more get fail');
      });
    }
  }




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

      }).error(function() {
        alert('category get fail');
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

      }).error(function() {
        alert('category get fail');
      });
    }

    //클릭시 active 클래스 추가, 나머지 제거
    categoryListBlock.find('.anchor').removeClass('active');
    $(this).addClass('active');


  })


  //카테고리 삭제
  function deleteCategory(id) {
    $.ajax({
      url: '/categories/delete',
      data: 'id=' + id,
      success: function(result) {
        $('.categoryList[id=' + id + ']').remove();
        $('.categoryList_update[id=' + id + ']').remove();
      }
    }).error(function() {
      alert('delete error');
    })

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

    }).error(function() {
      alert('modify error');
    })
  }

  //수정버튼
  $('.modifyButton').click(function() {
    modifyCategory($('select[name=modify_cate] option:selected').attr('id'), $('#name').val());
  })



  //Product 가져옴
  function createProduct() {
    limit = 0;
    $.ajax({
      url: '/api/products/limit/0',
      type: 'GET',
      dataType: 'json',
      success: function(res) {
        fillProduct(res);
      }
    })
    getCount();
  }

  //response에 맞게 Product 채우는 함수
  function fillProduct(res) {
    $.each(res, function(i) {
      var appendProduct = '<li class="item" id="product#' + res[i].id + '">' + '<a href="#" class="item_book"><div class="item_book"><div class="item_preview"><img alt="' + res[i].name + '" class="img_thumb" src="/resources/img/poster/' + res[i].save_file_name + '.jpg"><span class="img_border"></span></div><div class="event_txt"><h4 class="event_txt_tit"><span>' + res[i].name + '</span><small class="sm">' + res[i].description + '</small></h4><p class="event_txt_dsc">' + res[i].event + '</p></div></a></li>';
      if (i % 2 == 0) {
        productBlock.find('ul:first-child').append(appendProduct);
      } else {
        productBlock.find('ul:first-child+ul').append(appendProduct);
      }
    })

  }

  //count 갯수 받아오는 함수
  function getCount() {
    $.ajax({
      url: '/api/products/count',
      contentType: 'application/json',
      type: 'GET',
      success: function(res) {
        countBlock.text(res + '개');
      }
    })
  }

  //category별 count 갯수 받아오는 함수
  function getCountByCate(categoryId) {
    $.ajax({
      url: '/api/products/count/' + categoryId,
      contentType: 'application/json',
      type: 'GET',
      success: function(res) {
        countBlock.text(res + '개');
      }
    })
  }

  //createProduct();
  createProduct();

  //NAVER 로고 클릭시 이동
  $('.lnk_logo').click(function() {
    window.location.href = "/";
  })

  $('.btn_my').click(function() {
    window.location.href = "/reservation";
  })



})(window);
