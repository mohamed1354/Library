function spooky_mark(text,color,backgroundColor,fontSize,fontFamily,float,padding,margin,num){
   $(document).ready(function(){
       $(".mark_spooky:eq("+num+")").css({"color":color,"background-color":backgroundColor,"font-size":fontSize,"padding":padding,"margin":margin,"float":float,"font-family":fontFamily,"border-radius":"10%"});
       $(".mark_spooky:eq("+num+")").text(text);
    });
}