(function() {

  function getJSON(url, success, failure) {

    var connect = new XMLHttpRequest();
    connect.open("GET", url, true);
    connect.setRequestHeader("Accept", "application/json");
    connect.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.response);
        var ajx = "";

        for(let i = 0; i < data.length; i++) {

            let {
              name,
              username,
              email,
              address: {
                geo: [x,y],
              },
              website,
              company: {
                name: cname
              }
            } = data[i] || {};

            ajx +=
            `Imię: ${name}<br>
            Nazwisko: ${username}<br>
            Email: <a href="mailto:${email}"> Wyślij maila</a><br>
            Lokalizacja: <a href=“http://bing.com/maps/default.aspx?cp=${x}~${y}”> Pokaż na mapie</a><br>
            Strona WWW: <a href="${website}"> Przejdź</a><br>
            Firma: ${cname}<br><br>`;

        }

        success(ajx);
      }
    };
    connect.onerror = function() {
      failure(this.response);
    };
    connect.send();
  }

  $(".btn").on("click", function() {
    getJSON("http://code.eduweb.pl/bootcamp/json/",
    function(data) {
      console.log("Sukces");
      $(".ajax").append(data);
      console.log(data);
    }, function(err) {
    console.log("Wystąpił błąd!");
    console.log(err);
  });
});

})();
