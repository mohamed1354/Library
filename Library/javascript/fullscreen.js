function spooky_fullscreen(src,h1,p) {
	$(document).ready(function(){
		$("#myVideo").attr("src",src);
		$(".xcontent h1:eq(0)").text(h1);
		$(".xcontent p:eq(0)").text(p);
	    $("#myBtnx").on("click",function(){
			myFunction();
		});
	});
}

function myFunction(){
	var video = document.getElementById("myVideo");
	if(video.paused){
		video.play();
        $("#myBtnx").text("Pause");
	}else{
		video.pause();
		$("#myBtnx").text("Start");
	}
}