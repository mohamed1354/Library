function spooky_cards(titre,text,backgroundColor,float,margin,num){
  $(document).ready(function(){
      $(".cards:eq("+num+")").css({"background-color":backgroundColor,"float":float,"margin":margin});
      $(".cards:eq("+num+") h4:first").text(titre);
      $(".cards:eq("+num+") p:first").text(text);
  });
}