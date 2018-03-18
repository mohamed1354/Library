function spooky_Bgtext(text,width,color,float,fontSize,backgroundColor,margin,num){
    $(document).ready(function(){
      $(".Bgtext:eq("+num+")").css({"color":color,"float":float,"width":width,"font-size":fontSize,"background-color":backgroundColor,"margin":margin});
      $(".Bgtext:eq("+num+")").text(text);
    });
  }   