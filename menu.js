var menu;
var hamburger;

function setupMenu() {
	hamburger = document.getElementById("hamburger");
	menu = document.getElementById("menu");
}

function onHamburgerClick(toURL) {
	menu.classList.toggle('closed');
	if (toURL != undefined) {
		location.href = toURL;
	}
}
// かかかっか