(function($) {

 var btn = $(":button"),
    output = $("#output"),
    szablon = Handlebars.compile($("#tpl").html());

 btn.on("click", function(e) {
   e.preventDefault();

   $.getJSON("http://code.eduweb.pl/bootcamp/users/", function(data) {
				var text = { obj: data };

				var html = szablon(text);
				output.append(html);
		});

 });

})(jQuery);
