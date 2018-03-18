function spooky_modal(modal_heading,modal_text,num){
    Fun_modal(modal_heading,modal_text,num);
    close();
}
function Fun_modal(modal_header,modal_text,num){
   $(document).ready(function(){
       $(".modal_title:eq("+num+")").text(modal_header);
       $(".modal_text:eq("+num+")").text(modal_text);
   });
}
function close(){
     $(document).ready(function(){
         $(".btn_right_modal").on("click",function(){
             $("#modal_fade").hide();
         });
         $("#close").on("click",function(){
            $("#modal_fade").hide();
        });
     });
}