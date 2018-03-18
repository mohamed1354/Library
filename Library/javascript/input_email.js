function spooky_input_email(width,i,placeholder,float,margin){
    $(document).ready(function(){
        $(".input_email:eq("+i+")").css({"width":width,"float":float,"margin":margin});
        $(".input_email:eq("+i+")").attr("placeholder",placeholder);
    });   
 }