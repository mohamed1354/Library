function spooky_strong(text,number,fontSize,color,padding,float){
    var get_t = document.getElementsByTagName("strong");
    get_t[number].style.fontSize = fontSize;
    get_t[number].style.color = color;
    get_t[number].style.float = float;
    get_t[number].style.padding = padding;
    get_t[number].innerHTML = text;
   }