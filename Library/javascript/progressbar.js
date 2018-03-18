var get_progressbar = document.getElementById("myBar");
function spooky_progressbar(width,time,margin,num){
  $(document).ready(function(){
    $(".myProgress:eq("+num+")").css({"margin":margin,"width":width});
  });
  progress(time,width);
}
function progress(p_time,width){
 var p_width = 0;
 var id = setInterval(frame,p_time);
  function frame(){
   if(p_width>=width){
    clearInterval(id);
   }else{
     get_progressbar.style.width =p_width+"px";
     p_width++;
   }
  } 
}