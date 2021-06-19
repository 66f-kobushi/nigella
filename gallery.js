let featuresArray = [
	'<iframe width="1439" height="718" src="https://www.youtube.com/embed/lp5Khjq_4dM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="1439" height="718" src="https://www.youtube.com/embed/P22AUg-WXUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
	'<iframe width="1439" height="718" src="https://www.youtube.com/embed/a8VAl_Jxzd8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
];



function presentFeatures() {

	const height = feature1.clientHeight;
	const width = feature1.clientWidth;

	const size = " width='" + width + "' height='" + height + "' ";

	for (var i = 0; i < featuresArray.length; i++) {
		if (featuresArray[i].startsWith("<iframe")) {
			featuresArray[i] = "<iframe" + size + featuresArray[i].substring(33);
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