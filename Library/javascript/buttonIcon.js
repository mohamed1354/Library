function spooky_buttonIcon(title,icon,color,backgroundColor,margin,num){
    $(document).ready(function(){
        $(".btnIcon:eq("+num+") b:first").text(title);
        $(".btnIcon:eq("+num+") i:first").text(icon);
        $(".btnIcon:eq("+num+")").css({"background-color":backgroundColor,"color":color,"margin":margin});
    });
 }