function spooky_label(text,color,background,margin,num){
  $(document).ready(function(){
    $(".label:eq("+num+")").css({"color":color,"background-color":background,"margin":margin,"font-size":"13px","border-radius":"5px","padding":"4px 9px 5px 9px","float":"left"});
    $(".label:eq("+num+")").text(text);
  });
}