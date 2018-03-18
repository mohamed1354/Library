function tabcontent(event,item){
    var i,tabcontent,tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
     for(i=0;i<tabcontent.length;i++){
         tabcontent[i].style.display = "none";
     }
     tablinks= document.getElementsByClassName("tablinks");
     var active = document.getElementById(item).style.display ="block";
  }

function spooky_tabs(button_1,button_2,button_3,item1,item2,item3,backgroundColor,Color,margin,num){
    $(document).ready(function(){
        $(".tab_action:eq("+num+") .tab button:eq(0)").text(button_1);
        $(".tab_action:eq("+num+") .tab button:eq(1)").text(button_2);
        $(".tab_action:eq("+num+") .tab button:eq(2)").text(button_3);
        $(".tab_action:eq("+num+") #items1 p").text(item1);
        $(".tab_action:eq("+num+") #items2 p").text(item2);
        $(".tab_action:eq("+num+") #items3 p").text(item3);
        $(".tab_action:eq("+num+")").css({"margin":margin});
        $(".tab_action:eq("+num+") .tab").css({"background-color":backgroundColor,"color":Color});
    });
}
