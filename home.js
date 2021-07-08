var section_title;
var section_nigella;
var section_film;
var section_cast;
var building;
var film;
var clapper;
var flower1;
var flower2;
var feature1;
var feature2;
var feature3;

const images = [
	'001.jpg',
	'002.jpg',
	'003.jpg',
	'004.jpg',
	'005.jpg',
	'006.jpg',
	'007.jpg',
	'008.jpg',
	'009.jpg',
	'010.jpg',
	'011.jpg',
	'011.jpg'
];

window.onload = function() {
	section_title = document.getElementById("section-title")
	section_nigella = document.getElementById("nigella");
	section_film = document.getElementById("section-film");
	section_cast = document.getElementById("section-cast");
	building = document.getElementById("building");
	film = document.getElementById("film");
	clapper = document.getElementById("clapper");
	flower1 = document.getElementById("nigella-1");
	flower2 = document.getElementById("nigella-2");
	feature1 = document.getElementById("feature1");
	feature2 = document.getElementById("feature2");
	feature3 = document.getElementById("feature3");
	presentFeatures();
	setupMenu();
}

window.onscroll = function(e) {
	var title_scrollLife = elementScrollLife(section_title);
	if (elementIsDisplayed(section_title)) {
		var nigellaFrame = Math.round(ease(title_scrollLife, 0, 1, 0, 11, 0));
		flower1.src = "img/nigella1/" + images[nigellaFrame];
		flower2.src = "img/nigella2/" + images[nigellaFrame];
	}
	var nigella_scrollLife = elementScrollLife(section_nigella);
	if (elementIsDisplayedWide(section_nigella)) {
		var transform = ease(nigella_scrollLife, 0, 1, 0, -15, 1);
		building.style.transform = "translateX(" + transform + "vw)";
	}
	var film_scrollLife = elementScrollLifeWide(section_film);
	if (elementIsDisplayedWide(section_film)) {
		var transform = ease(film_scrollLife, 0, 1, 0, -50, 1);
		film.style.transform = "translateY(" + transform + "%)";
	}
	var cast_scrollLife = elementScrollLife(section_cast);
	if (elementIsDisplayed(section_cast)) {
		var transform = ease(cast_scrollLife, 0, 1, 0, -60, 1);
		clapper.style.transform = "translateX(-50%) translateY(" + transform + "vh)";
	}
}

function elementIsDisplayed(e) {
	return (0 <= elementScrollLife(e) && elementScrollLife(e) <= 1);
}

function elementIsDisplayedWide(e) {
	return (0 <= elementScrollLifeWide(e) && elementScrollLifeWide(e) <= 1);
}

// 画面に表示された瞬間から消える瞬間までアニメーション
function elementScrollLifeWide(e) {
	var scroll = e.getBoundingClientRect().top;
	return (window.innerHeight - scroll) / (window.innerHeight + e.clientHeight);
}

// 十分に表示されている間のみアニメーション
function elementScrollLife(e) {
	var scroll = e.getBoundingClientRect().top;
	var mh = Math.min(e.clientHeight / 2, window.innerHeight / 2);
	return (scroll - window.innerHeight + mh) / (2 * mh - e.clientHeight - window.innerHeight);
}

/**
 * @param {number} x - 入力値
 * @param {number} xa - 入力の最初の値
 * @param {number} xb - 入力の最後の値
 * @param {number} ya - 出力の最初の値
 * @param {number} yb - 出力の最後の値
 * @param {number} easing - イージング（0；なし、1；サインカーブ）
 */
function ease(x, xa, xb, ya, yb, easing) {

	// エラーとなる状況
	if (xa == xb) {
		return (ya + yb) / 2
	}

	// 定義域外の時（xaの外側）
	if ((xa < xb && x <= xa) || (xb < xa && xa <= x)) {
		return ya;
	}

	// 定義域外の時（xbの外側）
	if ((xa < xb && xb <= x) || (xb < xa && x <= xb)) {
		return yb;
	}
	
	// 定義域内の時
	if (easing == 1) {
		// サインカーブによるイージング
		var altx = ease(x, xa, xb, -Math.PI/2, Math.PI/2, 0) // xを-pi/2~pi/2に変換
		var origy = Math.sin(altx); // サインカーブでイージング
		return ease(origy, -1, 1, ya, yb, 0);
	} else {
		// 一次関数
		return (yb - ya) / (xb - xa) * (x - xa) + ya;
	}

}