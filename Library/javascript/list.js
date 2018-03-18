function spooky_list(text_list_1,text_list_2,text_list_3,text_list_4,margin,float,num){
    
    $(document).ready(function(){
        $(".list:eq("+num+") li:eq(0)").text(text_list_1);
        $(".list:eq("+num+") li:eq(1)").text(text_list_2);
        $(".list:eq("+num+") li:eq(2)").text(text_list_3);
        $(".list:eq("+num+") li:eq(3)").text(text_list_4);
    });

    change(num,margin,float);
}
function change(num,margin,float){
    $(document).ready(function(){
        $(".list:eq("+num+")").css({"margin":margin,"float":float});
        $(".list:eq("+num+") li").on("mousedown",function(){
            $(this).css({"color":"#2E9AFE"});
        });
        $(".list:eq("+num+") li").on("mouseleave",function(){
            $(this).css({"color":"#A4A4A4"});
        });
    });
}
