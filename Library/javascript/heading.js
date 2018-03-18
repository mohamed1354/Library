function spooky_heading(text,color,fontSize,fontFamily,fontWeight,float,center,padding,num) {
  $(document).ready(function(){
    $(".heading:eq("+num+")").css({"color":color,"clear":float,"font-size":fontSize,"font-family":fontFamily,"font-weight":fontWeight,"text-align":center,"padding":padding});
    $(".heading:eq("+num+")").text(text);
  });
}