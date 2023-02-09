
let select_id;
let select;

function selected() {
	if (select_id == "#foie_gras") document.querySelector(select_id + " .description").innerHTML = "Печень утки разварная с артишоками.";
	if (select_id == "#fish") document.querySelector(select_id + " .description").innerHTML = "Головы щучьи с чесноком да свежайшая сёмгушка.";
	if (select_id == "#chicken") document.querySelector(select_id + " .description").innerHTML = "Филе из цыплят с трюфелями в бульоне.";
	document.querySelector(select_id + " .card").classList.add('selected');
}
function offselected() {
	document.querySelector(select_id + " .card").classList.remove('selected');
	document.querySelector(select_id + " .description").innerHTML = "Чего сидишь? Порадуй котэ, <span class='buy'>купи</span>";
}

function enter(elem) {
	select_id = elem;
	if (!document.querySelector(select_id + " .card").classList.contains("disabled")) {
		if (document.querySelector(select_id + " .card").classList.contains("selected")) {
			document.querySelector(select_id + " .title1").innerHTML = "<span style='color: #E62E7A;'>Котэ не одобряет?</span>";
		}
	}
	
}
function leave(elem) {
	if (select == "onselect") selected();
	if (select == "offselect") offselected();
	if (!document.querySelector(select_id + " .card").classList.contains("disabled")) {
		document.querySelector(select_id + " .title1").innerHTML = "Сказочное заморское яство";
	}
	select_id = "";
	select = "";
}

context.onclick = function() {
	if (select_id) {
		if (!document.querySelector(select_id + " .card").classList.contains("disabled")) {
			if (document.querySelector(select_id + " .card").classList.contains("selected")) {
				select = "offselect";
			}else {
				select = "onselect";
			}
		}
	}
}

function ondisabled() {
	document.querySelector(select_id + " .card").classList.add('disabled');
	if (select_id == "#foie_gras") document.querySelector(select_id + " .description").innerHTML = "Печалька, с фуа-гра закончился.";
	if (select_id == "#fish") document.querySelector(select_id + " .description").innerHTML = "Печалька, с рыбой закончился.";
	if (select_id == "#chicken") document.querySelector(select_id + " .description").innerHTML = "Печалька, с курой закончился.";
}
function offdisabled() {
	document.querySelector(select_id + " .card").classList.remove('disabled');
	document.querySelector(select_id + " .description").innerHTML = "Чего сидишь? Порадуй котэ, <span class='buy'>купи</span>";
}

context.oncontextmenu = function(event) {
	event.preventDefault();
	if (select_id) {
		if (!document.querySelector(select_id + " .card").classList.contains("selected")) {
			if (!document.querySelector(select_id + " .card").classList.contains("disabled")) {
				ondisabled();
			}else {
				offdisabled();
			}
		}
	}
};