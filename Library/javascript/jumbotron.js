function spooky_jumbotron(heading,text,num){
  $(document).ready(function(){
     $(".jumbotron:eq("+num+") h1:first").text(heading);
     $(".jumbotron:eq("+num+") p:first").text(text);
  });
}
