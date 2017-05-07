(function($) {

  var btn = $(":button"),
      txt = $("input[type=text]");

  function checkInput() {

    if ($.trim(txt.val().length) >= 3) {
      return $.trim(txt.val());
    } else {
      return;
    }

  }

  btn.on("click", function(e) {

    e.preventDefault();

    var inputValue;
    if (checkInput()) {
      inputValue = $("<li></li>").text(checkInput());
    } else {
      alert("Wprowadź minimum 3 znaki");
      return;
    }
    $(".ul").append(inputValue);
  });

})(jQuery);
