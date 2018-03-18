function spooky_link(text,link,number,fontSize,color,padding,float){
  $(document).ready(function(){
  	$(".link:eq("+number+")").css({"color":color,"font-size":fontSize,"padding":padding,"float":float,"text-decoration":"none"});
  	$(".link:eq("+number+")").text(text);
  	$(".link:eq("+number+")").attr("href",link);
  });
}