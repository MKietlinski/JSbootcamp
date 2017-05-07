(function($) {

  // wszystkie elementy <div>, posiadające zarówno klasę grid oraz klasę grid-12.
  $("div[class='grid grid-12']").css("color", "red");

  // wszystkie elementy <a>, których atrybut href zaczyna się na “http”, znajdujące się w elemencie o klasie nav
  $("nav a[href^='http://']").css("color", "red");

  // wszystkie elementy <input>, których typ to radio lub checkbox oraz dodatkowo nie są aktualnie zaznaczone (checked)
  $("[type='radio']:not(:checked), input[type='checkbox']:not(:checked)").css("color", "red");

  // wyłącznie pierwszy element <p>, który jest pusty (nie zawiera dzieci) oraz znajduje się w elemencie <div> z identyfikatorem text
  $("div[id='text'] p:empty").first().css("color", "red");

  // wszystkie elementy z klasą pagination-item, które nie są elementem <span>
  $(".pagination-item").not("span").css("color", "red");

})(jQuery);
