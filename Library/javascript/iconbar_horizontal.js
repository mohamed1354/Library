function spooky_iconbar_horizontal(icon_1,icon_2,icon_3,icon_4,backgroundColor,num){
    $(document).ready(function(){
        $(".icon-bar-horizontal:eq("+num+") i:eq(0)").text(icon_1);
        $(".icon-bar-horizontal:eq("+num+") i:eq(1)").text(icon_2);
        $(".icon-bar-horizontal:eq("+num+") i:eq(2)").text(icon_3);
        $(".icon-bar-horizontal:eq("+num+") i:eq(3)").text(icon_4);
        $(".icon-bar-horizontal:eq("+num+")").css({"display":"inline-block","background-color":backgroundColor});
        $(".icon-bar-horizontal:eq("+num+") i").css("font-size","36px");
    });
}