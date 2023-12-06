// 🏆 TASK TITTLE : Replace With Alphabet Position

//  ❓ TASK : Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

// ✔️ SOLUTION :
// function alphabetPosition(text) {
//   const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//   text = Array.from(text.toLowerCase().replace(/[^a-z]/, ''));

//   const arr = [];
//   text.forEach((el) => {
//     for (let i = 0; i < alphabetString.length; i++) {
//       if (el === alphabetString[i]) {
//         arr.push(alphabetString.indexOf(alphabetString[i]) + 1);
//       }
//     }
//   }, []);

//   return arr.join(' ');
// }
