function spooky_breadcrumb(item1,item2,item3,item4,backgroundColor,float,margin,num){
  $(document).ready(function(){
      $("ul.breadcrumb:eq("+num+")").css({"background-color":backgroundColor,"float":float,"margin":margin});
      $(".breadcrumb:eq("+num+") li a:eq(0)").text(item1);
      $(".breadcrumb:eq("+num+") li a:eq(1)").text(item2);
      $(".breadcrumb:eq("+num+") li a:eq(2)").text(item3);
      $(".breadcrumb:eq("+num+") li a:eq(3)").text(item4);
  });
}