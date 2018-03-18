function spooky_input_text(width,i,placeholder,float,margin){
    $(document).ready(function(){
        $(".input_text:eq("+i+")").css({"width":width,"float":float,"margin":margin});
        $(".input_text:eq("+i+")").attr("placeholder",placeholder);
    });   
}
