function spooky_blockquote(text,width,color,float,fontSize,fontFamily,margin,BorderColor,num){
    $(document).ready(function(){
        $(".blockquote:eq("+num+")").css({"color":color,"padding":"15px 15px 15px 15px","float":float,"width":width,"font-size":fontSize,"border-left":"4px solid"+BorderColor,"margin":margin,"font-family":fontFamily});
        $(".blockquote:eq("+num+")").text(text);
      });
}