function spooky_dropdown(title_1,title_2,title_3,title_4,backgroundColor,color,margin,num){
   $(document).ready(function(){
     $(".dropdown-content:eq("+num+") a:eq(o)").text(title_1);
     $(".dropdown-content:eq("+num+") a:eq(1)").text(title_2);
     $(".dropdown-content:eq("+num+") a:eq(2)").text(title_3);
     $(".dropdown-content:eq("+num+") a:eq(3)").text(title_4);
     $(".dropbtn:eq("+num+")").css({"background-color":backgroundColor,"color":color});
     $(".dropdown:eq("+num+")").css("margin",margin);
   });
}