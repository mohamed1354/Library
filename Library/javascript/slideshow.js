function spooky_slideshow(img_1,img_2,img_3,width,height,float,margin,num) {
	// body...
     $(document).ready(function(){
     	$(".slideShow:eq("+num+") img:eq(0)").attr("src",img_1);
     	$(".slideShow:eq("+num+") img:eq(1)").attr("src",img_2);
     	$(".slideShow:eq("+num+") img:eq(2)").attr("src",img_3);
      $(".slideShow:eq("+num+")").css({"width":width,"height":height,"margin":margin,"float":float});
     });
}
 var index =0;
     Time();
    function Time() {
        $(document).ready(function(){
        var get_index = $(".Myslide");
        for(var i=0;i<get_index.length;i++){
           $(".Myslide:eq("+i+")").css("display","none");
        }
        index++;
        if(index>get_index.length){index=1;}
        $(".Myslide:eq("+(index-1)+")").css("display","block");
        setTimeout(Time,2000);
    });
    
    }