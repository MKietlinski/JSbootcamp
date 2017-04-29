(function() {

  function getPage() {
    var regex = /\?page=\d+/;
    if(regex.test(window.location.search)) {
      var number = window.location.search.slice(6);
      return Number(number);
    } else {
      return null;
    }

  }

  console.log(getPage());

})();
