(function() {
  var DETAIL_NUMBER = $('#container').attr('data-detail-number');

  var clickBack = (function() {
    $('.fn-backward1').on('click', function() {
      history.back();
    });
  })();

  var fillReservation = (function() {
    var appendReservation;
    var arr = [];
    var type = ["", "성인", "청소년", "유아"];
    var source = $('#reservation-template').html();
    var template = Handlebars.compile(source);
    var RESERVATION_BODY = $('.ticket_body')

    $.ajax({
      url: '/api/reservationInforms/price/' + DETAIL_NUMBER,
      contentType: 'application/json',
      type: 'GET',
      success: function(res) {
        $.each(res, function(i) {
          var price = res[i].price;
          var discount = res[i].discountRate;
          arr.push(res[i]);
          arr[i].priceTypeName = type[res[i].priceType];
          arr[i].discountedPrice = price * ((100 - discount) / 100);
          appendReservation = template(arr[i]);
          RESERVATION_BODY.append(appendReservation);
        })
      }
    });
  })();

  var insertReservation = (function() {
    return {
      insert() {
        var userid = $('#container').attr('user-id');
        var name = $('#name').val()
        var tel = $('.tel').val();
        var email = $('.email').val();
        var general_ticket_count = $('.count_control_input')[attr = 0].value;
        var youth_ticket_count = $('.count_control_input')[attr = 1].value;
        var child_ticket_count = $('.count_control_input')[attr = 2].value;


        $.ajax({
          url: "/api/reservations",
          dataType: "json",
          contentType: "application/json; charset=UTF-8",
          type: 'POST',
          data: JSON.stringify({
            "product_id": DETAIL_NUMBER,
            "user_id": userid,
            "general_ticket_count": general_ticket_count,
            "youth_ticket_count": youth_ticket_count,
            "child_ticket_count": child_ticket_count,
            "reservation_name": name,
            "reservation_tel": tel,
            "reservation_email": email
          }),
          success: function(res) {
            alert('성공!');
          }
        })
      }
    }
  })();


  var Ticket = (function() {
    return {
      setTicket(clicked) {
        if (clicked.siblings('.count_control_input').val() == 0) {
          clicked.addClass('disabled');
          clicked.siblings('.count_control_input ').addClass('disabled');
          clicked.closest('.count_control').find('.individual_price').removeClass('on_color');
        }
      }
    }
  })();

  $(document).ready(function() {
    var clickTicket = (function() {
      $('.count_control_input').val(0);
      $('.ico_plus3').on('click', function(e) {
        e.preventDefault();
        $(this).siblings('.ico_minus3').removeClass('disabled');
        $(this).siblings('.count_control_input').removeClass('disabled');
        $(this).closest('.count_control').find('.individual_price').addClass('on_color');
        var count = $(this).siblings('.count_control_input').val();
        var price = $(this).closest('.qty').find('.product_dsc').text().split('원')[0];
        $(this).siblings('.count_control_input').val(+count + 1);
        $(this).closest('.count_control').find('.total_price').text(price * (+count + 1));
      })

      $('.ico_minus3').on('click', function(e) {
        e.preventDefault();
        var count = $(this).siblings('.count_control_input').val();
        var price = $(this).closest('.qty').find('.product_dsc').text().split('원')[0];
        if (count > 0) {
          $(this).siblings('.count_control_input').val(+count - 1);
          $(this).closest('.count_control').find('.total_price').text(price * (+count - 1));
        }
        Ticket.setTicket($(this));
      })
      
    })();
  });

  var registInput = (function() {
    var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var regPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
    return {
      checkPhone() {
        if (!regPhone.test($('.tel').val())) {
          //console.log("전화바꼇어");
          return false;
        }
        return true;
      },
      checkEmail() {
        if (!regEmail.test($('.email').val())) {
          return false;
        }
        return true;
      }
    }
  })();

  var clickTerms = (function() {
    $('.btn_agreement').on('click', function(e) {
      e.preventDefault();
      $(this).closest('.agreement').addClass('open');
    })
  })();

  var checkValid = (function() {
    var check1;
    var check2;
    var check3;
    var check4;
    return {
      checkAll() {
        check1 = registInput.checkPhone();
        check2 = registInput.checkEmail();
        check3 = $('#chk3').is(":checked");
        check4 = ($('.text').val() !== "");
        if (check1 && check2 && check3 && check4) {
          $('.bk_btn_wrap').removeClass('disable');
        } else {
          $('.bk_btn_wrap').addClass('disable');
        }
      }
    }
  })();

  var checkChange = (function() {
    $('.ct_wrap').change(function() {
      checkValid.checkAll();
    });
  })();

  var clickReservationButton = (function() {
    $('.bk_btn_wrap').on('click', function() {
      insertReservation.insert();
    });
  })();


})();
