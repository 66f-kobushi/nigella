window.onload = function() {
	setupMenu();
	var userAgent = window.navigator.userAgent.toLowerCase();
	if ((userAgent.indexOf("safari") != -1) && (userAgent.indexOf("chrome") == -1)) {
		$(".cast-introduction").css('background-size', 'contain');
	}
	
}
