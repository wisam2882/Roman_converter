document.getElementById('convert-btn').addEventListener('click', function() {
    const number = document.getElementById('number').value;
    const output = document.getElementById('output');

//if input is empty return invalid
    if (number === '') {
        output.textContent = "Please enter a valid number";
        return;
    }
    // if number is less than 1 send message 5.
    const num = parseInt(number);
    if (num < 1) {
        output.textContent = "Please enter a number greater than or equal to 1"
        return;
    }

    //if number is less than 3999

    if (num > 3999) {
      output.textContent = "Please enter a number less than or equal to 3999"
      return;
    }

    //main function (roman)

    function toRoman(n) {
      const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
      ];
      let result = ``;

      for (let i = 0; i < romanNumerals.length; i++) {
        while (n >= romanNumerals[i].value) {
          result+= romanNumerals[i].numeral;
          n-= romanNumerals[i].value;
        }
      }
      return result;
    }

    const romanNumeral = toRoman(num);
    output.textContent = romanNumeral;




});