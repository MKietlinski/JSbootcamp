(function() {

  function Toggler(selector){
    this.selector = document.querySelector(selector);

    this.getElem = function() {
      return this.selector;
    };

    this.show = function() {
      this.selector.style.display = "";
    };

    this.hide = function() {
      this.selector.style.display = "none";
    };
  }

  var elem = new Toggler("#section");
  var button = document.querySelector("#button");

  button.addEventListener("click", function() {

      if(elem.getElem().style.display == "none") {
          elem.show();
      } else {
          elem.hide();
      }

  }, false);

})();
