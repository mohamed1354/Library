function spooky_notes(type,message,num) {
	// body...
    $(document).ready(function(){
    	if(type == "danger"){
           $(".notes:eq("+num+")").css({"background-color":"#ffdddd","border-left":" 6px solid #f44336"});
           $(".notes:eq("+num+") strong:first").text("Danger !");
           $(".notes:eq("+num+") p:first").text(message);
    	}else if(type == "success"){
            $(".notes:eq("+num+")").css({"background-color":"#ddffdd","border-left":" 6px solid #4CAF50"});
           $(".notes:eq("+num+") strong:first").text("Success !");
           $(".notes:eq("+num+") p:first").text(message);
    	}else if(type == "info"){
            $(".notes:eq("+num+")").css({"background-color":" #e7f3fe","border-left":" 6px solid #2196F3"});
           $(".notes:eq("+num+") strong:first").text("Info !");
           $(".notes:eq("+num+") p:first").text(message);
    	}
    });
    close_notes(num);
}
function close_notes(){
	$(document).ready(function(){
    $(".notes:eq("+num+")").on("click",function(){
        $(this).fadeOut("slow");
    });
});

}