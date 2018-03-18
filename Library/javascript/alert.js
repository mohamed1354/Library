function spooky_alert(text,float,type,side,num){
  var get = document.getElementsByClassName("alert");
  get[num].style.padding = "10px 20px 12px 20px";
  get[num].style.color = "white";
  get[num].style.position = "fixed";
  get[num].innerText = text;
  if(float == "left"){
    get[num].style.left = "20px";
  }else{
      get[num].style.right = "20px";
  }
  if(side=="top"){
    get[num].style.marginTop = "20px";
  }else{
      get[num].style.bottom = "20px";
  }
  if(type=="danger"){
   get[num].style.backgroundColor = "#F78181";
  }else if(type=="success"){
   get[num].style.backgroundColor = "#04B45F";
  }else if(type == "info"){
   get[num].style.backgroundColor = "#2E9AFE";
  }
}
$(document).ready(function(){
    $(".alert").on("click",function(){
        $(this).fadeOut("slow");
    });
});
