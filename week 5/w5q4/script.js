(function() {

  class Lotek {

    constructor() {
      this.numbers = [];
      this.getNumbers();
    }

    [Symbol.iterator]() {
      let numbers = this.numbers,
          index = 0;

      return {
        next: function() {
          return {
            done:(index === numbers.length ? true : false),
            value: numbers[index++]
          };
        }
      };
    }

    getNumbers() {
      let random;

      for(let i = 0; i < 6; i++) {
          random = this.getRandom(1, 49);
          while(this.numbers.indexOf(random) !== -1) {
              random = this.getRandom(1, 49);
          }
          this.numbers.push(random);
      }
    }

    getRandom(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    checkNumbers(num1, num2, num3, num4, num5, num6) {
      let nums = [...arguments],
          good = [];

          for(let i = 0; i < nums.length; i++) {
            if(this.numbers.indexOf(nums[i]) !== -1) {
              good.push(nums[i]);
            }
          }

      return {
        numbers: good,
        count: good.length
      };
    }
  }

  let shot = new Lotek();

  let results = shot.checkNumbers(2, 13, 15, 22, 34, 40);
  console.log(results);
  // zwraca np. { numbers: [13, 22], count: 2 }

  // tablica ze wszystkimi wylosowanymi liczbami
 let numbers = [...shot];
console.log(numbers);

  // wyświetla kolejno wylosowane liczby
  for(let number of shot) {
      console.log(number);
  }

})();
