(function() {

  const urls = [
    "http://code.eduweb.pl/kurs-jquery/images/photo-1.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-2.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-3.jpg",
    "http://code.eduweb.pl/kurs-jquery/images/photo-4.jpg"
];

function preloadImages(urls) {
  let length = urls.length,
  counter = 0;

  let p = new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();

    for(let i = 0; i < length; i++) {
      let x = new Image();
      x.src = urls[i];

      x.onload = function() {
          counter++;

          if(counter === length) {
              resolve(urls);
          }
      };

      x.onerror = function() {
        length--;

        if(counter === length) {
            resolve(urls);
        }
        reject(new Error("Nie udało się załadować zdjęcia"));
      };
    }

  });
  return p;
}

let body = document.querySelector("body");

preloadImages(urls)
    .then(function(imgs) {
      // tutaj utwórz dla każdego adresu URL
      // z przekazanej tablicy imgs element <img>
      // i wstaw je wszystkie do fragmentu dokumentu,
      // który na końcu zwrócisz, aby był dostępny
      // w kolejnym bloku .then
        console.log("Obrazy wczytane.");
        let df = document.createDocumentFragment();
        for(let i = 0; i < imgs.length; i++) {

          img = document.createElement("img");
          img.setAttribute("src", imgs[i]);
          df.appendChild(img);
        }
        return df;
    })
    .then(function(docFragment) {
        // wstaw otrzymany fragment dokumentu na stronę,
        // aby wczytane obrazy się pokazały
        body.appendChild(docFragment);
    })
    .catch(function(err) {
        console.log(err.message);
    });

})();
