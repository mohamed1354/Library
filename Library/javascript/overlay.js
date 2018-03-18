function spooky_overlay(title_1,title_2,title_3,title_4,num) {
    $(document).ready(function(){
        $(".overlay:eq("+num+") a:eq(1)").text(title_1);
        $(".overlay:eq("+num+") a:eq(2)").text(title_2);
        $(".overlay:eq("+num+") a:eq(3)").text(title_3);
        $(".overlay:eq("+num+") a:eq(4)").text(title_4);
    });
}
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}