function spooky_text(text,color,float,fontSize,padding,num){
  $(document).ready(function(){
    $(".Ptext:eq("+num+")").css({"color":color,"float":float,"padding":padding,"font-size":fontSize,"font-family":"sans-serif"});
    $(".Ptext:eq("+num+")").text(text);
  });
}   