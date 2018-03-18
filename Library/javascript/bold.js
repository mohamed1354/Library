function spooky_bold(text,number,fontSize,color,padding,float){
 $(document).ready(function(){
     $(".bold:eq("+number+")").css({"font-size":fontSize,"color":color,"padding":padding,"float":float});
     $(".bold:eq("+number+")").text(text);
 });
}