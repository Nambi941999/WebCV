

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/bg1.png", 
	 		 "images/bg2.png",
			 "images/bg3.png"
	 			], 	{duration: 3200, fade: 1300});
		});
})