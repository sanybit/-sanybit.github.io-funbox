
let select_id;
let select;

function selected() {
	if (select_id == "fg") document.getElementById("description_fg").innerHTML = "Печень утки разварная с артишоками.";
	if (select_id == "fh") document.getElementById("description_fh").innerHTML = "Головы щучьи с чесноком да свежайшая сёмгушка.";
	if (select_id == "ch") document.getElementById("description_ch").innerHTML = "Филе из цыплят с трюфелями в бульоне.";
	document.querySelector("#back_" + select_id).className = "selected_back";
	document.querySelector("#border_" + select_id).className = "selected";
	document.querySelector("#oval_" + select_id).className = "selected";
}
function offselected() {
	document.querySelector("#back_" + select_id).className = "";
	document.querySelector("#border_" + select_id).className = "";
	document.querySelector("#oval_" + select_id).className = "";
	document.querySelector("#description_" + select_id).innerHTML = "Чего сидишь? Порадуй котэ, <span id='buy_fh'>купи</span>";
}

function enter(elem) {
	select_id = elem;
	if (document.querySelector("#card_" + select_id).className != "disabled") {
		if (document.querySelector("#border_" + select_id).className == "selected") {
			document.querySelector("#title1_" + select_id).innerHTML = "Котэ не одобряет?";
			document.querySelector("#title1_" + select_id).className = "selecthover";
		}
	}
}
function leave(elem) {
	if (select == "onselect") selected();
	if (select == "offselect") offselected();
	if (document.querySelector("#card_" + select_id).className != "disabled") {
		document.querySelector("#title1_" + select_id).innerHTML = "Сказочное заморское яство";
		document.querySelector("#title1_" + select_id).className = "";
	}
	select_id = "";
	select = "";
}

context.onclick = function() {
	if (select_id) {
		if (document.querySelector("#card_" + select_id).className != "disabled") {
			if (document.querySelector("#border_" + select_id).className == "selected") {
				select = "offselect";
			}else {
				select = "onselect";
			}
		}
	}
}

function ondisabled() {
	document.querySelector("#card_" + select_id).className = "disabled";
	document.querySelector("#title1_" + select_id).className = "disabled";
	document.querySelector("#title2_" + select_id).className = "disabled";
	document.querySelector("#taste_" + select_id).className = "disabled";
	document.querySelector("#amount_" + select_id).className = "disabled";
	document.querySelector("#photo_disabled_" + select_id).className = "photo_disabled";
	document.querySelector("#border_disabled_" + select_id).className = "border_disabled";
	document.querySelector("#oval_" + select_id).className = "oval_disabled";
	document.querySelector("#description_" + select_id).className = "description_disabled";
	if (select_id == "fg") document.getElementById("description_fg").innerHTML = "Печалька, с фуа-гра закончился.";
	if (select_id == "fh") document.getElementById("description_fh").innerHTML = "Печалька, с рыбой закончился.";
	if (select_id == "ch") document.getElementById("description_ch").innerHTML = "Печалька, с курой закончился.";
}
function offdisabled() {
	document.querySelector("#card_" + select_id).className = "";
	document.querySelector("#title1_" + select_id).className = "";
	document.querySelector("#title2_" + select_id).className = "";
	document.querySelector("#taste_" + select_id).className = "";
	document.querySelector("#amount_" + select_id).className = "";
	document.querySelector("#photo_disabled_" + select_id).className = "";
	document.querySelector("#border_disabled_" + select_id).className = "";
	document.querySelector("#oval_" + select_id).className = "";
	document.querySelector("#description_" + select_id).className = "";
	document.querySelector("#description_" + select_id).innerHTML = "Чего сидишь? Порадуй котэ, <span id='buy_fh'>купи</span>";
}

context.oncontextmenu = function(event) {
	event.preventDefault();
	if (select_id) {
		if (document.querySelector("#border_" + select_id).className != "selected") {
			if (document.querySelector("#card_" + select_id).className != "disabled") {
				ondisabled();
			}else {
				offdisabled();
			}
		}
	}
};