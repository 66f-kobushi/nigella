let featuresArray = [
	'<iframe width="1439" height="718" src="https://www.youtube.com/embed/lp5Khjq_4dM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="1439" height="718" src="https://www.youtube.com/embed/IRsSionlasU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="1439" height="718" src="https://www.youtube.com/embed/bF9x0yNe1d0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="1439" height="718" src="https://www.youtube.com/embed/nYrXurT1GHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="0718" height="718" src="https://www.youtube.com/embed/dR5E922ng3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<img src="img/c66644cc808e3b6de0cb619d35943d5e0_4620693218542382700_210708_263.jpg" onclick="location.href=\'gallery/\'">',
	'<img src="img/c66644cc808e3b6de0cb619d35943d5e0_4620693218542382700_210708_262.jpg" onclick="location.href=\'gallery/\'">',
	'<img src="img/IMG_20210617_161704.jpg" onclick="location.href=\'gallery/\'">',
	'<img src="img/kyakuhonn.png" onclick="location.href=\'gallery/\'">',
	'<img src="img/story-top.jpg" onclick="location.href=\'gallery/\'">'
];


function presentFeatures() {

	const height = feature1.clientHeight;
	const width = feature1.clientWidth;

	const size_iframe = " width='" + width + "' height='" + height + "' ";
	const size_img = " style='width: " + width + "px; height: " + height + "px; object-fit: contain;' ";

	for (var i = 0; i < featuresArray.length; i++) {
		if (featuresArray[i].startsWith("<iframe")) {
			featuresArray[i] = "<iframe" + size_iframe + featuresArray[i].substring(33);
		} else if (featuresArray[i].startsWith("<img")) {
			featuresArray[i] = "<img" + size_img + featuresArray[i].substring(4)
		}
	}

	let feature1_index = Math.floor(Math.random() * featuresArray.length);
	let feature2_index;
	do {
		feature2_index = Math.floor(Math.random() * featuresArray.length);
	} while (feature2_index == feature1_index);
	let feature3_index;
	do {
		feature3_index = Math.floor(Math.random() * featuresArray.length);
	} while (feature3_index == feature1_index || feature3_index == feature2_index);
	
	feature1.innerHTML = featuresArray[feature1_index];
	feature2.innerHTML = featuresArray[feature2_index];
	feature3.innerHTML = featuresArray[feature3_index];
}