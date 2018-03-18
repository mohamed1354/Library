function spooky_buttonUp(){
    $(document).ready(function(){
        $(".buttonUp").on("click",function(){
            $("html,body").animate({
                "scrollTop":0
            },400);
        });
    });
}