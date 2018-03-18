function spooky_search(width,backgroundColor,float,margin,num){
    $(document).ready(function(){
       $(".search:eq("+num+")").css({"border":"1.5px solid "+backgroundColor,"float":float,"margin":margin});
       $(".search:eq("+num+")").on("mouseenter",function(){
           $(this).animate({
             "width":width
           },400);
       });
       $(".search:eq("+num+")").on("mouseleave",function(){
        $(this).animate({
            "width":"130px"
          },400);
       });
    });
}