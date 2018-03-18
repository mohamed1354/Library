function spooky_checkbox(text,margin,num){
    $(document).ready(function(){
     $(".Icheckbox:eq("+num+")").css("margin",margin);
     $(".Icheckbox:eq("+num+") strong:first").text(text);
    });
}