(function() {

    function debounce(fn, time) {

    	var timeout;

    	return function() {

    		var show = function() {
    			timeout = null;
    			fn();
    		};

    		clearTimeout(timeout);
    		timeout = setTimeout(show, time);

    	};
    }

    var handleScroll = debounce(function() {
        console.log("Scrollujemy!");
    }, 200);

    window.addEventListener("scroll", handleScroll, false);

    var handleResize = debounce(function() {
        console.log("Zmieniamy rozmiar okna!");
    }, 100);

    window.addEventListener("resize", handleResize, false);

})();
