//Lecture : Strings

let firstName = 'john';
let lastName  = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2020- year;
};

//ES5

console.log('This is '+firstName+' '+
    lastName+'. He was born in '+yearOfBirth +
    '. Today he is '+calcAge(yearOfBirth)+' years old');

//ES6
//es6부터는 string 을 +로 연결할게 아니라 backtick(`)으로 연결한다.
//`는 template literal을 사용한다는 의미

console.log(`this is ${firstName} ${lastName}.He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('j'));
//n이 j로 시작하는지 확인
console.log(n.endsWith('h'));
//n이 h로 끝나는지 확인
console.log(n.includes('Sm'));
console.log(n.includes(''));
//n에 string이 들어있는지 확인
console.log(`${firstName} `.repeat(5));
//firstName 을 다섯번 반복