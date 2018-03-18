function spooky_image(src,width,height,borderRadius,margin,num){
      $(document).ready(function(){
         $(".image:eq("+num+")").css({"width":width,"height":height,"margin":margin,"border-radius":borderRadius});
         $(".image:eq("+num+")").attr("src",src);
      });
}