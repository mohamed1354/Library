function spooky_checkbox_inline(text_1,text_2,text_3,margin,num){
    $(document).ready(function(){
        $(".checkbox_group:eq("+num+") strong:eq(0)").text(text_1);
        $(".checkbox_group:eq("+num+") strong:eq(1)").text(text_2);
        $(".checkbox_group:eq("+num+") strong:eq(2)").text(text_3);
        $(".checkbox_group:eq("+num+")").css("margin",margin);
    });
}