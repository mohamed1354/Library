function spooky_dialogs(text,width,float,posX,backgroundColor,color,Component,num){
  $(document).ready(function(){
      $(".dialogs:eq("+num+")").css({"background-color":backgroundColor,"color":color,"width":width});
      if(float=="left"){
         $(".dialogs:eq("+num+")").css("left",posX);
      }else{
        $(".dialogs:eq("+num+")").css("right",posX);
      }
      $(".dialogs:eq("+num+")").text(text);
      $(Component).on("click",function(){
          $(".dialogs:eq("+num+")").show("slow");
          $(".dialogs:eq("+num+")").on("click",function(){
              close(num);
          });
      });
  });
}
function close(num){
    $(".dialogs:eq("+num+")").fadeOut();
}