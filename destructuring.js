//Lecture:Destructure
//data structure 에서 data를 객체나 배열로 추출하는 방법

// //ES5
// var john =['John',26];
// var name =john[0];
// var age = john[1];
//
// //ES6
// const [name,year] =['John',26];
// console.log(name);
// console.log(year);
//
// const obj  = {
//     firstName :'John',
//     lastName:'Smith'
// }
//
// const {firstName,lastName} = obj;
//
// console.log(firstName);
// console.log(lastName);
//
// const {firstName :a, lastName :b} = obj;
//
// console.log(a);
// console.log(b);


function calcAgeRetirement(year){
    const age =
        new Date().getFullYear() - year;
    return [age,65-age];

}

const[age, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);