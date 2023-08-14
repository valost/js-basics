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


// let myName = 'Valeriia Ostrovska'

// // let vowels = 'a o e i';
// let result = '';

// for (const ch of myName) {
//   if (!'aeio'.includes(ch.toLowerCase())) {
//     result += ch;
//   }
// }

// console.log(result);


// let myName = 'Valeriia Ostrovska';

// myName = myName[0] + myName[9];

// console.log(myName);


// let fullName = 'Valeriia Igorivna Ostrovska';

// let abbreviation = fullName[0];


// for (let i = 1; i < fullName.length; i++) {
//     if (fullName[i] === ' ') {
//         abbreviation += fullName[i + 1];
//     }
// }

// console.log(abbreviation);


// const letters = ['a', 'b', 'c', 'd', 'e'];

// console.log(letters);

// letters[letters.length] = 'z'; // not so popular

// console.log(letters);

// letters.push('f', 'g', 'h', 'i');

// console.log(letters);

// letters.unshift('f', 'g', 'h', 'i');
// const n = letters.shift();

// console.log(letters);
// console.log(n);


const str = 'Today is a good day';
const words = str.split(' ');
console.log(words);
console.log(words.length);
// console.log(words[3]);

// for (let i = 0; i < words.length; i++) {
//     console.log(words[i]);
// }

for (const n of words) {
    console.log(n);
}

let theLongest = words[0];

for (let i = 1; i <  words.length; i++) {
    if (words[i].length > theLongest.length) {
        theLongest = words[i];
    }
}

console.log(theLongest);