function spooky_searchbar(title_1,title_2,title_3,title_4,backgroundColor,color,num){
    $(document).ready(function(){
        $(".topnav:eq("+num+") a:eq(0)").text(title_1);
        $(".topnav:eq("+num+") a:eq(1)").text(title_2);
        $(".topnav:eq("+num+") a:eq(2)").text(title_3);
        $(".topnav:eq("+num+") a:eq(3)").text(title_4);
        $(".topnav:eq("+num+")").css("background-color",backgroundColor);
        $(".topnav:eq("+num+") a").css("color",color);
    });
}