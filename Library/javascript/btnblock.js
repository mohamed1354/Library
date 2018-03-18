function spooky_btnblock(title,backgroundColor,marginTop,num){
   $(document).ready(function(){
       $(".btnblock:eq("+num+")").text(title);
       $(".btnblock:eq("+num+")").css({"margin-top":marginTop,"background-color":backgroundColor});
   });
}