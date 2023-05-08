// 일정시간 후 팝업이 뜨도록하는 함수
setTimeout(function() {
  $(".popupStay").show();

  $(".popup_close").click(function () {
    $(".popupStay").hide();    
  });
}, 2000); //1초 = 1000