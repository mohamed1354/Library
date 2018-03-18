function spooky_iframe(width,height,src,number,margin,float){
  var get_iframe = document.getElementsByTagName("iframe");
  get_iframe[number].style.width = width;
  get_iframe[number].style.height = height;
  get_iframe[number].src = src;
  get_iframe[number].style.margin = margin;
  get_iframe[number].style.float = float;
}