/* function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
} */


/* function isOdd(num) {
    return num % 2 !== 0;
}


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);

let multipliedNumbers = oddNumbers.map((num) => num * 3);
console.log(multipliedNumbers);

let productOfAllNumbers = multipliedNumbers.reduce((total, currentItem) => {
    return total * currentItem;
}, 1);
console.log(productOfAllNumbers);

console.log("alt method: " + numbers.filter((num)=>num%2!==0).map((num)=>num*3).reduce((total,currentItem)=>total*currentItem,1));
*/

/*describe("camelize", function() {

  it("leaves an empty line as is", function() {
    assert.equal(camelize(""), "");
  });

  it("turns background-color into backgroundColor", function() {
    assert.equal(camelize("background-color"), "backgroundColor");
  });

  it("turns list-style-image into listStyleImage", function() {
    assert.equal(camelize("list-style-image"), "listStyleImage");
  });

  it("turns -webkit-transition into WebkitTransition", function() {
    assert.equal(camelize("-webkit-transition"), "WebkitTransition");
  });

}); */