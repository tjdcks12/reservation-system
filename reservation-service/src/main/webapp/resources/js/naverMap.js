$(document).ready(function() {
  var map = new naver.maps.Map('map');
  var myaddress = $('.addr_old_detail').text(); // 도로명 주소나 지번 주소만 가능 (건물명 불가!!!!)
  naver.maps.Service.geocode({
    address: myaddress
  }, function(status, response) {
    if (status !== naver.maps.Service.Status.OK) {
      return alert(myaddress + '의 검색 결과가 없거나 기타 네트워크 에러');
    }
    var result = response.result;
    // 검색 결과 갯수: result.total
    // 첫번째 결과 결과 주소: result.items[0].address
    // 첫번째 검색 결과 좌표: result.items[0].point.y, result.items[0].point.x
    var myaddr = new naver.maps.Point(result.items[0].point.x, result.items[0].point.y);
    map.setCenter(myaddr); // 검색된 좌표로 지도 이동
    // 마커 표시
    var marker = new naver.maps.Marker({
      position: myaddr,
      map: map
    });
    // 마커 클릭 이벤트 처리
    naver.maps.Event.addListener(marker, "click", function(e) {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(map, marker);
      }
    });
    // 마크 클릭시 인포윈도우 오픈
    var infowindow = new naver.maps.InfoWindow({
      content: '<h4> [네이버 개발자센터]</h4><a href="https://developers.naver.com" target="_blank"><img src="https://developers.naver.com/inc/devcenter/images/nd_img.png"></a>'
    });
  });
});
