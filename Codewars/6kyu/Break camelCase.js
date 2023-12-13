// 🏆 TASK TITTLE : Break camelCase

//  ❓ TASK : Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// ✔️ SOLUTION :
// function solution(string = '') {
//     let arr = string.split('');
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i].toUpperCase() && i !== 0) {
//             arr.splice(i, 0, '-');
//             i += 1;
//         }
//     }
//     return arr.join('');
// }

// console.log(solution('camelCasingTest'));
