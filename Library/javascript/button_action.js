 function spooky_button_action(color,backgroundColor){
  var get_button = document.getElementById("button_action");
  get_button.style.backgroundColor = backgroundColor;
  get_button.style.color = color;
  slide();
}

function slide(){
  $(document).ready(function(){
    $("#button_action").click(function(){
       $(".button_action_group #button_action_child").slideDown();
    });
   $(this).dblclick(function(){
    $(".button_action_group #button_action_child").slideUp();
    }); 
  });
}