(function($) {

  var menu = $(".container").hide(),
      btn = $(".btn");

  btn.on("click", function() {
    menu.fadeToggle();
  });

})(jQuery);
