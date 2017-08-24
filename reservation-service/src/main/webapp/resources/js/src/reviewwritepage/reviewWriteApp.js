window.$ = require('../../node_modules/jquery/dist/jquery');
window.jQuery = window.$;
var reviewThumnailTemplate = require('../handlebars-templates/review-thumnail-template.html');

var headModule = (function () {
    $('.fn-backward1').on('click', function (e) {
        e.preventDefault();
        location.href = '/booked/list';
    })
})();

var currentValue = 0;
var pastChoosedValue = 0;
$('.rating_rdo').on('click', function () {
    var choosedValue = $(this).val();
    console.log(choosedValue);
    var $ratingInput = $('.rating_rdo');
    if (pastChoosedValue === choosedValue) {
        $ratingInput.prop('checked', false);
        pastChoosedValue = 0;
        currentValue = 0;
    } else {
        $ratingInput.each(function () {
            if ($(this).val() <= choosedValue) {
                $(this).prop('checked', true);
            } else {
                $(this).prop('checked', false);
            }
        });
        pastChoosedValue = choosedValue;
        currentValue = choosedValue;
    }
    changeValue(currentValue);

    function changeValue(value) {
        $('.star_rank').text(value);
        if (value === 0) {
            $('.star_rank').addClass('gray_star');
        } else {
            $('.star_rank').removeClass('gray_star');
        }
    }
});

$('.review_write_info').on('click', function () {
    $(this).addClass('invisible');
    $('.review_textarea').focus();
});

$('.review_textarea').keyup(function (e) {
    var textLength = $(this).val().length;
    if (textLength > 400) {
        alert('400자를 초과하여 작성하실 수 없습니다.');
        $(this).val($(this).val().substring(0, 400));
        textLength = 400;
    }
    $('.guide_review span:first-child').text(textLength);
});


var fileNum = 0;
var files = []

function getThumbnailPrivew(html) {
    if (html.files && html.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var fileObj = {};
            fileObj.fileNum = fileNum;
            fileObj.fileLocation = e.target.result;
            $('.lst_thumb').prepend(reviewThumnailTemplate(fileObj));
            $('.lst_thumb :first-child').find('.ico_del').closest('.anchor').on('click', function () {
                files[$(this).closest('.item').data('file-num')] = null;
                $(this).closest('.item').remove();
            });
            files[fileNum] = html.files[0];
            fileNum++;
            console.log(files);
        }
        reader.readAsDataURL(html.files[0]);
    }
}

$('#reviewImageFileOpenInput').on('change', function (e) {
    getThumbnailPrivew(this);
});

$('.bk_btn').on('click', function (e) {
    var fd = new FormData();
    var $write = $('.write_act');
    fd.append('productId', $write.data('product-id'));
    fd.append('userId', $write.data('user-id'));
    fd.append('score', currentValue / 5);
    fd.append('comment', $('.review_textarea').val());
    for (var i = 0; i < files.length; i++) {
        if (files[i] != null) {
            fd.append('file', files[i]);
        }
    }
    console.log(fd);
    $.ajax({
        type: 'POST',
        url: '/review',
        enctype: 'multipart/form-data',
        contentType: false,
        processData: false,
        data: fd,
        success: function (res) {
            alert('성공');
            window.location.href = '/booked/list';
        },
        error: function (res) {
            // alert('에러가 발생했습니다.');
            // location.reload();
        }
    });
});
