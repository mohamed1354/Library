function spooky_badge(number,background,color,padding,margin,borderRadius,float,num){
  $(document).ready(function(){
    $(".badge:eq("+num+")").css({"color":color,"padding":padding,"background-color":background,"margin":margin,"border-radius":borderRadius,"float":float});
    $(".badge:eq("+num+")").text(number);
  });
}
