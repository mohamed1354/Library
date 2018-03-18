function spooky_iconbar_vertical(icon_1,icon_2,icon_3,icon_4,backgroundColor,num){
    $(document).ready(function(){
        $(".icon-bar-vertical:eq("+num+") i:eq(0)").text(icon_1);
        $(".icon-bar-vertical:eq("+num+") i:eq(1)").text(icon_2);
        $(".icon-bar-vertical:eq("+num+") i:eq(2)").text(icon_3);
        $(".icon-bar-vertical:eq("+num+") i:eq(3)").text(icon_4);
        $(".icon-bar-vertical:eq("+num+")").css({"display":"inline-block","background-color":backgroundColor});
        $(".icon-bar-vertical:eq("+num+") i").css("font-size","36px");
    });
}