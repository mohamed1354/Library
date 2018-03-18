function spooky_loader(width,height,float,margin,num) {
	$(document).ready(function(){
		$(".loader:eq("+num+")").css({"width":width,"height":height,"float":float,"margin":margin});
	});
}