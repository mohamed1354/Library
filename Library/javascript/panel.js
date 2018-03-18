function spooky_panel(text,text_1,width,borderColor,backgroundColor,margin,float,num){
  $(document).ready(function(){
    $(".panel:eq("+num+")").css({"width":width,"margin":margin,"float":float,"border-color":borderColor});
  });
  style(backgroundColor,text,text_1,num);
}
function style(backgroundColor,text,text_1,num){
  $(document).ready(function(){
      $(".panel:eq("+num+") #panel_heading").css("background-color",backgroundColor);
      $(".panel:eq("+num+") #panel_heading").text(text);
      $(".panel:eq("+num+") #panel_body").text(text_1);
  });
}