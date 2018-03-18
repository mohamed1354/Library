function spooky_bodyImg(backgroundUrl){
    $(document).ready(function(){
        $("body").css({"background-image":"url('"+backgroundUrl
        +"')","background-position":"center","background-size":"cover","background-repeat":"no-repeat","width":"100%","height":"100%"});
    });
  }