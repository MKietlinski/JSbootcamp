(function() {

  function getJSON(url, success, failure) {

    var connect = new XMLHttpRequest();
    connect.open("GET", url, true);
    connect.setRequestHeader("Accept", "application/json");
    connect.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        success(JSON.parse(this.response));
      }
    };
    connect.onerror = function() {
      failure(this.response);
    };
    connect.send();
  }

  getJSON("http://code.eduweb.pl/bootcamp/users/", function(data) {
    console.log("Sukces");
    console.log(data);
    console.log(typeof(data));
  }, function(err) {
    console.log("Wystąpił błąd!");
    console.log(err);
  });

})();
