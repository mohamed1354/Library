function tab_header(Name,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-header");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink-header");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(Name).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function spooky_tablink(name_1,name_2,name_3,name_4){
    $(document).ready(function(){
        $(".items button:eq(0)").text(name_1);
        $(".items button:eq(1)").text(name_2);
        $(".items button:eq(2)").text(name_3);
        $(".items button:eq(3)").text(name_4);
    });
 }
 