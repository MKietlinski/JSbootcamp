(function() {

  function fecz(url, success, failure) {

    var connect = new XMLHttpRequest();
    connect.open("GET", url, true);
    connect.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        success(this.response);
      }
    };
    connect.onerror = function() {
      failure(this.response);
    };
    connect.send();
  }

  fecz("http://code.eduweb.pl/bootcamp/users/", function(data) {
    console.log("Sukces");
    console.log(data);
  }, function(err) {
    console.log("Wystąpił błąd!");
    console.log(err);
  });

})();
