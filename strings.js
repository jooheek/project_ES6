//Lecture : Strings

let firstName = 'john';
let lastName  = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2020- year;
};

//ES5

console.log('This is '+firstName+' '+lastName+'. He was born in '+yearOfBirth +'. Today he is '+calcAge(yearOfBirth)+' years old');

//ES6
//es6부터는 string 을 +로 연결할게 아니라 backtick(`)으로 연결한다.
//`는 template literal을 사용한다는 의미

console.log(`this is ${firstName} ${lastName}.He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old`);

const n = `${firstName} ${lastName}`;

//문장을 하나로 받아서 .startsWith()으로 검증 가능
console.log(n.startsWith('j'));
console.log(n.endsWith('h'));
console.log(n.includes('Sm'));
console.log(n.includes(''));
console.log(`${firstName} `.repeat(5));