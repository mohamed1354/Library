function spooky_cards_image(title,text,src,height,float,margin,num){
   $(".cards_image:eq("+num+") img:first").attr("src",src);
   $(".cards_image:eq("+num+")").css({"float":float,"margin":margin,"height":height});
   $(".cards_image:eq("+num+") h4:first").text(title);
   $(".cards_image:eq("+num+") p:first").text(text);
}