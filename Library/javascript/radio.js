function spooky_radio(text,margin,num){
    $(document).ready(function(){
        $(".radio:eq("+num+")").css("margin",margin);
        $(".radio:eq("+num+") b:first").text(text);
       });
}