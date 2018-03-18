function spooky_popout(title,text,width,float,margin,num){
  $(document).ready(function(){
      $(".popout:eq("+num+")").css({"width":width,"margin":margin,"float":float,"height":"auto"});
      $(".popout:eq("+num+") #header_popout").text(title);
      $(".popout:eq("+num+") #body_popout").text(text);
  });
  Ani_popout(num);
}

function Ani_popout(num){
    $(document).ready(function(){
        $(".popout:eq("+num+") #header_popout").on("click",function(){
            $(".popout:eq("+num+") #body_popout").slideToggle();
        });
    });
}