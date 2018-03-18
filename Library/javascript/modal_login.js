function spooky_modal_login(width,height,color,fontSize,backgroundColor,float,margin,borderRadius,num){
    $(document).ready(function(){
        $("#btn_btn_modal_login").css({"width":width,"height":height,"color":color,"background-color":backgroundColor,
        "font-size":fontSize,"margin":margin,"border-radius":borderRadius});
    });
    OpenLogin(num);
 }
 function OpenLogin(num){
     $(document).ready(function(){
         
         $("#btn_btn_modal_login").on("click",function(){
             $("#modal_fade_login").show();
             
         });
         
         $("#close_login").on("click",function(){
             $("#modal_fade_login").hide();
         });
         

     });
 }