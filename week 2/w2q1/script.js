(function() {
	var content = document.querySelector(".content"),
	btn = document.querySelector("#btn"),
	hide = true;

	btn.addEventListener("click", function() {
	content.classList.toggle("content");
	if (hide === true) {
		btn.textContent = "Ukryj wiadomość";
		hide = false;
	} else {
		btn.textContent = "Pokaż wiadomość";
		hide = true;
	}
}, false);
})();
