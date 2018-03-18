function spooky_modal_signUp(width,height,color,fontSize,backgroundColor,float,margin,borderRadius,num){
   $(document).ready(function(){
    $("#btn_btn_modal_signUp").css({"width":width,"height":height,"color":color,"background-color":backgroundColor,
    "font-size":fontSize,"margin":margin,"border-radius":borderRadius});
});
   OpenSignUp(num);
   
}
function OpenSignUp(num){
    $(document).ready(function(){
        $("#btn_btn_modal_signUp").on("click",function(){
            $("#modal_fade_sign").show();
        });
        $("#close_signUp").on("click",function(){
            $("#modal_fade_sign").hide();
        });
    });
}