(function() {

  if(typeof String.prototype.repeatt !== "function")
  {
    String.prototype.repeatt = function(times) {
      var text = this.toString();

      for(var i = 1; i < times; i++) {
        text += this.toString();
      }
      console.log(text);
    };
  }

})();
