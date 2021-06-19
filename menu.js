var menu;
var hamburger;

function setupMenu() {
	hamburger = document.getElementById("hamburger");
	menu = document.getElementById("menu");
}

function onHambugerClick() {
	menu.classList.toggle('closed');
}