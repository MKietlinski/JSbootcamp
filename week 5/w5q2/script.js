(function() {

  // Zakładamy, że taki obiekt byłby dodany
  // gdzieś w kodzie HTML w tagu <script>
  // przez system CMS generujący widok strony
  window.currencies = {
      "USD": 3.8078,
      "EUR": 4.1794,
      "GBP": 4.9456
  };

  function formatPrice(currency, outputx) {
    let cur = currencies[currency];

    return function output(strings, ...values) {
      let op = "";

      strings.forEach(function(string, index) {
        let value = values[index];

        op += string;

        if(value !== undefined) {
          if(typeof value === "number") {
            value /= cur;
            op += value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + " " + currency;
          } else {
            op += value;
          }
        }
      });
      return op;
    }
  }

  let product = {
      name: "Pendrive 16GB",
      price: 23,
      quantity: 4
  };

  let { name: pName, price: pPrice, quantity: pQuantity } = product;

  let info = formatPrice("GBP")`Kupiłeś produkt '${pName}' w cenie ${pPrice} za sztukę. Łączna wartość zamówienia to ${pPrice * pQuantity}.`;

  console.log(info);
  // Kupiłeś produkt 'Pendrive 16GB' w cenie 4.65 GBP za sztukę. Łączna wartość zamówienia to 18.60 GBP.

})();
