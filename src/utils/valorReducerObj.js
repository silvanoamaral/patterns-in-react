var segundoArray = [
  "0",
  [0, 1, 2, 3, null, 4],
  [5, [6, 7, 8, 9, [10, 11, 12]]],
  "John",
] //42
var exemplo = ["1", 2, 3, [4], 5, [null, 5, [7], 8], 9] //14
var exemplo3 = ["1", 2, 3, [4], 5, [null, 6, [7], 8], 9] //20

var valorReducer = (obj) =>
  [...obj].reduce((sum, item) => {
    return sum + isNumber(item)
  }, 0)

var isObjeto = (n) => (typeof n == "object" ? valorReducer(n) : 0)
var isImpar = (n) => (n % 2 == 0 ? n : 0)
var isNumber = (n) => (isNaN(n) ? isObjeto(n) : isImpar(Number(n)))

var suma = valorReducer(exemplo)

console.log(suma)
