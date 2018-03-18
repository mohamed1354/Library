function spooky_btnRound(title,backgroundColor,color,borderRadius,margin,num){
   $(document).ready(function(){
       $(".buttonRound:eq("+num+")").css({"background-color":backgroundColor,"color":color,"border-radius":borderRadius,"margin":margin});
       $(".buttonRound:eq("+num+")").text(title);
   });
}