window.onload = function() {
	setupMenu();
}


function onImageClick(element) {
	location.href = '/gallery/viewer.html?img=' + element.src;
}