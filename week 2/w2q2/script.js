(function() {

var form = document.querySelector("#Form"),
    fields = form.querySelectorAll("[data-error]");

    function isNotEmpty(field) {
      return field.value !== "";
    }
    function isEmail(field) {
      return field.value.indexOf("@") !== -1;
    }
    function isNumeric(field) {
      return field.value.match(/^[0-9]+$/);
    }

    function displayErrors(errors) {
      var ul = document.querySelector("ul.errors");

      if(!ul) {
        ul = document.createElement("ul");
        ul.classList.add("errors");
      }
      ul.innerHTML = "";
      errors.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
      });
      form.parentNode.insertBefore(ul, form);
    }

    form.addEventListener("submit", function(e) {

      e.preventDefault();
      var error = [];

      for (var i = 0; i < fields.length; i++) {
        var field = fields[i],
            isValid = false;

        if(field.type === "text") {
          isValid = isNotEmpty(field);
        } else if(field.type === "email") {
          isValid = isEmail(field);
        } else if(field.type === "number") {
          isValid = isNumeric(field);
        } else if(field.type === "textarea") {
          isValid = isNotEmpty(field);
        }
        if(!isValid) {
          field.classList.add("error");
          error.push(field.dataset.error);
        } else {
          field.classList.remove("error");
        }
      }

      if(error.length) {
        displayErrors(error);
      } else {
        form.submit();
      }
    }, false);

  })();
