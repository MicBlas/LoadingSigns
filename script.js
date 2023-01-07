/*$(function () {
	//alert($.fn.jquery);
});*/
let menu = $("#menu").children("li");
let containers = $(".container");

let arr = $.each(containers, function () {
	return this.classList;
});

//console.log();
menu.on("click", function (event) {
	let showClassOfmenu = this.classList.toString();

	for (let i = 0; i < arr.length; i++) {
		$(arr[i]).css("display", "none");
		if (showClassOfmenu == arr[i].classList[1]) {
			$(arr[i]).css("display", "flex");
			//console.log(arr[i]);
		}
	}
});
