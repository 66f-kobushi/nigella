const cm_features = [
	'<iframe width="1439" height="718" src="https://www.youtube.com/embed/lp5Khjq_4dM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="1439" height="718" src="https://www.youtube.com/embed/IRsSionlasU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="1439" height="718" src="https://www.youtube.com/embed/bF9x0yNe1d0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="1439" height="718" src="https://www.youtube.com/embed/nYrXurT1GHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
]

let layout_cm;

window.onload = function() {
	setupMenu();

	layout_cm = document.getElementById("cm-grid");
	const grid_width = layout_cm.childNodes[1].clientWidth;
	const grid_height = Math.round(grid_width / 4 * 3);
	const size = " width='" + grid_width + "' height='" + grid_height + "' ";
	
	while (layout_cm.firstChild) {
		layout_cm.removeChild(layout_cm.firstChild);
	}

	for (var i = 0; i < cm_features.length; i++) {
		var div = document.createElement("div");
		div.style="background-color: #AAAAAA66";
		div.innerHTML = "<iframe" + size + cm_features[i].substring(33);
		layout_cm.appendChild(div);
	}

}

function onImageClick(element) {
	location.href = 'viewer.html?img=' + element.src;
}