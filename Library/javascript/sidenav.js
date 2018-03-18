function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
}

function spooky_sidenav(title_1,title_2,title_3,title_4,num){
    $(document).ready(function(){
        $(".sidenav:eq("+num+") a:eq(1)").text(title_1);
        $(".sidenav:eq("+num+") a:eq(2)").text(title_2);
        $(".sidenav:eq("+num+") a:eq(3)").text(title_3);
        $(".sidenav:eq("+num+") a:eq(4)").text(title_4);
    });
}