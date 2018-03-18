function spooky_ContactForm(width,backgroundColor,color,margin,num){
    $(document).ready(function(){
        $(".ContactForm").css({"background-color":backgroundColor,"margin":margin,"width":width});
        $(".ContactForm label").css("color",color);
    });
}