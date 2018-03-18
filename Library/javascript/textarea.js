function spooky_textarea(text,width,height,number,float,margin){
   var get_textarea = document.getElementsByClassName("textarea");
   get_textarea[number].style.width = width;
   get_textarea[number].style.height = height;
   get_textarea[number].style.float = float;
   get_textarea[number].style.margin = margin;
   get_textarea[number].innerHTML = text;
}