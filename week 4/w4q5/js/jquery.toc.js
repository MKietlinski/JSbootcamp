(function($, window, document, undifined) {

  $.fn.toc = function() {
    var toc = $("<div class='toc'></div>"),
        title = $("<h2>Spis treści</h2>"),
        ul = $("<ul></ul>");

    this.each(function(i) {
      var that = $(this).find("h2");
      var links = $("<li><a href='#" + (i + 1) + "'>" + (i + 1) + ". " + that.text() + " </a></li>");
      $(this).attr("id", (i + 1));
      ul.append(links);
    });
    toc.append(title).append(ul);

    console.log(toc);
    toc.insertBefore(this[0]);
  };

})(jQuery, window, document);
