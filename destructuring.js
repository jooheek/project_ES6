//Lecture:Destructure
//배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식
//data structure 에서 data를 객체나 배열로 추출하는 방법

//ES5
// var john =['John',26];
// var name =john[0];
// var age = john[1];

//ES6
//배열에 넣어줌
const [name,year] =['John',26];
console.log(name);
console.log(year);


//객체에 넣어줌
const obj  = {
    firstName :'John',
    lastName:'Smith'
}
///////version.1
const {firstName,lastName} = obj;


console.log(firstName);
console.log(lastName);

///////version.2
const {firstName :a, lastName :b} = obj;

console.log(a);
console.log(b);
////////////////////////////////////////

//함수로 배열을 리턴하는 방법
function calcAgeRetirement(year){
    const age =
        new Date().getFullYear() - year;
    return [age,65-age];

}

const[age, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);