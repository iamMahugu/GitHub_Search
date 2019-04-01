$(document).ready(function () {
  $("#cards").click(function(){
    $("html,body").animate({scrollTop:$("#card").height()},2000);
      return false;
  })
  var typed=new Typed(`#type`,{
      strings:["Search Repos","Search Users","Search user Names","All in one","Hit the button below to get started"],
      backSpeed:70,
      typeSpeed:80,
      loop:true
    })
});
