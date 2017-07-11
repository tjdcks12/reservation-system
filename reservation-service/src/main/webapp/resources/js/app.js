(function(window) {
  'use strict';

  function deleteCategory(id) {
    $.ajax({
      url: '/delete',
      data : 'id=' + id,
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


  function modifyCategory(id, name){
    $.ajax({
      url:'/modify',
      data : 'id=' + id +'&name=' + name,
      success: function(result){
        $('.categoryList[id=' + id + ']').text(name);
        $('.categoryList_update[id=' + id + ']').text(name);
      }

    }).error(function(){
      alert('modify error');
    })
  }

  $('.modifyButton').click(function(){
    modifyCategory($('select[name=modify_cate] option:selected').attr('id'), $('#name').val());
  })

})(window);
