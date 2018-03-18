function spooky_video(src,width,height,number,float,margin){
  var video = document.getElementsByTagName("video");
  video[number].style.width = width;
  video[number].style.height = height;
  video[number].src = src;
  video[number].style.margin = margin;
  video[number].style.float = float;
}