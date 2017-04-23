(function() {
	var btn = document.querySelector("#btn"),
			output = document.querySelector("#output");

	btn.addEventListener("click", function () { clock(10, 1000); }, false);

	function clock(times, delay) {
		var counter = times;
		tic(delay, function () {
			console.log("jebut");
		});
	}

	function tic(delay, fn) {
		if (counter >= 0) {
			output.textContent = counter--;
			timeout = setTimeout(function () { tic(delay); }, delay);
			if (fn) setTimeout(function () { fn(); }, delay*(counter+1));
		}
		if (counter === -1) clearTimeout(timeout);
	}
})();
