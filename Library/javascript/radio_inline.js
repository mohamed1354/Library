function spooky_radio_inline(text_1,text_2,text_3,margin,num){
    $(document).ready(function(){
        $(".radio_group:eq("+num+") b:eq(0)").text(text_1);
        $(".radio_group:eq("+num+") b:eq(1)").text(text_2);
        $(".radio_group:eq("+num+") b:eq(2)").text(text_3);
        $(".radio_group:eq("+num+")").css("margin",margin);
    });
}