function spooky_scrollTo(time){
    $(document).ready(function(){
        $(".scrollTo").on("click",function(){
            $("html,body").animate({
                "scrollTop":0
            },time);
        });
    });
}