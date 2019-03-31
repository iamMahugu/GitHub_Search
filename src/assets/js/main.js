$(document).ready(function () {
  $("#cards").click(function(){
    $("html,body").animate({scrollTop:$("#card").height()},2000);
      return false;
  })
});
