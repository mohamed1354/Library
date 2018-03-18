function spooky_audio(width,height,src,number,margin,float){
    var audio = document.getElementsByTagName("audio");
    audio[number].style.width = width;
    audio[number].style.height = height;
    audio[number].src = src;
    audio[number].style.margin = margin;
    audio[number].style.float = float;
  }