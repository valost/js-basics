// console.log('Hi');

// for (let myAge = 31; myAge <=35; myAge++) {
//     console.log(`I am ${myAge}`);
// }

// const n = 10;
// let sum = 0;



// for (let i = 1; 1 <= n; i++) {
//     sum += i;
// }

// console.log(sum);

// console.log('Hi');

// function getDrinks (numberOfGuests) {
//     const numberOfGuests = 5;
//     let drinks = 0;

//     for (numberOfPortions = 1; numberOfPortions <= numberOfGuests; numberOfPortions++ ) {
//         console.log(numberOfPortions)
//     }
// }

// const numberOfGuests = 5;
// let getDrinks = 0;

// for (let numberOfPortions = 1; numberOfPortions <= numberOfGuests; numberOfPortions++) {
//     getDrinks += numberOfPortions;
// }

// console.log(getDrinks);

// const nameSurname = 'Valeriia Ostrovska';

// console.log(nameSurname);
// console.log(nameSurname.length);
// console.log(nameSurname[17]); // counting from 0, 1, 2 etc.
// console.log(nameSurname[nameSurname.length -4]);
// console.log(nameSurname.at(-2)); // works with -1, -2, etc.
// console.log(nameSurname.charAt(4)); // doesn't work with -1, -2, etc.


// const myName = 'Valeriia Ostrovska';
// // let count = 0;
// let reversed = '';

// for (let i = 0; i < myName.length; i++) {
//   if (myName[i] === 'r') {
//     count++;
//   }
// }

// console.log(count);

// for (const vowel of myName) {
//   if (vowel === 'a') {
//     count++;
//   }
// }

// console.log(count);
// console.log(typeof myName, typeof count);

// for (let i = myName.length - 1; i >= 0; i--) {
//   reversed += myName[i];
// }

// for (const letter of myName) {
//   reversed = letter + reversed
// }

// console.log(reversed);


// const myName = '    Valeriia Ostrovska    ';

/* upper and lower case*/

// console.log(
//   myName.toUpperCase ()
// );

// console.log(
//   myName.toLowerCase()
// );

// console.log(myName, myName.length);

// /* trim */

// console.log(
//   myName.trim(),
//   myName.trim().length
// );

// console.log(
//   myName.trimStart(),
//   myName.trimStart().length
// );

// console.log(
//   myName.trimEnd(),
//   myName.trimEnd().length
// );

// /* replace */

// console.log(
//   myName.replaceAll('a', 'o'),
// );

// console.log(
//   myName.replaceAll('o', 'a'),
// );

// const x = 9876543;

// console.log(typeof x);

// console.log(
//   // x.toString(),
//   // '' + x,
//   // `${x}`,
//   String(x),
//   String(x).length,
// )

// const myName = 'Valeriia Ostrovska';
// const part = 'a';

// console.log(
//   myName.includes(part)
//   // myName.toLowerCase().includes(part.toLowerCase)
// );

// console.log(
//   myName.indexOf('v')
// );


let myName = 'Valeriia Ostrovska'
let result = '';

for (let ch of myName) {
  if (ch !== 'a') {
    result = result + ch
  }
}

console.log(result);




// let myName = 'Valeriia Ostrovska'
// let result = '';

// for (let ch of myName) {
//   if (ch !== 'a') {
//     result = result + ch
//   }
// }

// console.log(result);