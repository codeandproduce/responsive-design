$(window).scroll(function(){
	parallax();
});

function parallax(){
	
	var scroll = $(window).scrollTop();
	$(".parallax-bg").css("background-position", "center "+scroll*0.45+"px");
	
	console.log($(window).width()/parseFloat($("body").css("font-size")));
	
	if($(window).width()/parseFloat($("body").css("font-size")) > 60){
		$(".parallax-box").css('top', -5+(scroll*0.015)+"em");
	}else{
		$(".parallax-box").css('top', "-5em");
	}
	
}