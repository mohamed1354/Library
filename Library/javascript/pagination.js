function spooky_pager(Prev,Next,margin,num){
   $(document).ready(function(){
      $(".pagination-link:eq("+num+")").css("margin",margin);
      $(".pagination-link:eq("+num+") .previous:eq(0) ").on("click",function(){
        window.location.href = Prev;
      });
      $(".pagination-link:eq("+num+") .next:eq(0) ").on("click",function(){
        window.location.href = Next;
      });
   });
}