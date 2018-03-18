function spooky_icards(src,heading,para,height,float,margin,num) {
	$(document).ready(function(){
		$(".icard:eq("+num+")").css({"margin":margin,"float":float,"height":height});
		$(".icard:eq("+num+") h4:eq(0)").text(heading);
		$(".icard:eq("+num+") p:eq(0)").text(para);
		$(".icard:eq("+num+") img:eq(0)").attr("src",src);
	});
}
