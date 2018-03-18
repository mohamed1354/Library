function spooky_buttonload(backgroundColor,margin,num){
  $(document).ready(function(){
      $(".buttonload:eq("+num+")").css({"background-color":backgroundColor,"margin":margin});
  });
}