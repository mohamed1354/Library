function spooky_buttonGroup(title_1,title_2,title_3,backgroundColor,Bordercolor,margin,num) {
    $(document).ready(function(){
        $(".btn-group:eq("+num+") button").css({"backgroundColor":backgroundColor,"border":"1px solid "+Bordercolor});
        $(".btn-group:eq("+num+")").css("margin",margin);
        $(".btn-group:eq("+num+") button:eq(0)").text(title_1);
        $(".btn-group:eq("+num+") button:eq(1)").text(title_2);
        $(".btn-group:eq("+num+") button:eq(2)").text(title_3);
    });
}