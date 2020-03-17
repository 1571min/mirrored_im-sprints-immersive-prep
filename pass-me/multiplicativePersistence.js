/*
multiplicativePersistence 함수를 작성합니다.

multiplicativePersistence 함수는 양수를 파라미터로 받는 함수로,
각 자릿의 숫자들을 곱한 결과물들이 하나의 숫자가 될 때까지 반복적으로 곱한 후,
최후의 한 자리 숫자를 리턴하는 함수입니다.

예를 들어 786을 인자로 넘길 경우, 함수는 0을 리턴해야 합니다.
7 * 8 * 6 -> 336
3 * 3 * 6 -> 54
5 * 4 -> 20
2 * 0 -> 0

*/

//testtest

function makeArr(num) {
  let numArr = String(num).split('');
  return numArr;
}

function multiplicativePersistence(num) {//786
  let numArr = makeArr(num)//['7','']
  let result = 0;
  numArr.reduce(acc => (acc <= 9) ? result = acc : makeArr(acc).reduce((acc,cur) => Number(acc) * Number(cur), 1), num);
  return result;
}


// function multiplicativePersistence(num) {
//   // your code here
// if(acc <= 9){
//   result = acc;
// }
// //acc를 문자-> 숫자 하는과정 반복
// return makeArr(acc).reduce((acc,cur) => Number(acc) * Number(cur), 1)
// }, num)
// }

module.exports = multiplicativePersistence;
