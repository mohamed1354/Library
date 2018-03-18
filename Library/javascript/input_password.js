function spooky_input_password(width,i,placeholder,float,margin){
    $(document).ready(function(){
        $(".input_password:eq("+i+")").css({"width":width,"float":float,"margin":margin});
        $(".input_password:eq("+i+")").attr("placeholder",placeholder);
    });   
 }