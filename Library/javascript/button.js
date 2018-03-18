function spooky_button(text,type,color,background,borderRadius,margin,href,num){
  $(document).ready(function(){
    $(".spooky_button:eq("+num+")").css({"color":color,"background-color":background,"border-radius":borderRadius,"margin":margin,"border":"1px solid "+background});
    $(".spooky_button:eq("+num+")").text(text);
  });
  if(type == "lg"){
    $(".spooky_button:eq("+num+")").css({"padding":"22px 22px 22px 22px","font-size":"20px"});
  }else if(type == "md"){
    $(".spooky_button:eq("+num+")").css({"padding":"18px 18px 18px 18px","font-size":"19px"});
  }else if(type == "sm"){
    $(".spooky_button:eq("+num+")").css({"padding":"15px 15px 15px 15px","font-size":"14px"});
  }else if(type == "block"){
    $(".spooky_button:eq("+num+")").css({"padding-top":"15px","padding-bottom":"15px","width":"80%","font-size":"20px","text-align":"center"});
  }
  if(href != "#"){
  link(href,num);
  }
}
function link(to,num){
    $(".spooky_button:eq("+num+")").on("click",function(){
         window.open(to);
    });
}