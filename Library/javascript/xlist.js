function spooky_xlist(item_1,item_2,item_3,item_4,width,float,margin,num){
    $(document).ready(function(){
        $(".xlist:eq("+num+")").css({"margin":margin,"width":width,"float":float});
        $(".xlist:eq("+num+") option:eq(0)").text(item_1);
        $(".xlist:eq("+num+") option:eq(1)").text(item_2);
        $(".xlist:eq("+num+") option:eq(2)").text(item_3);
        $(".xlist:eq("+num+") option:eq(3)").text(item_4);
    });
}