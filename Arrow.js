//Lecture :Arrow function
const years = [1990,1987,1932,2020];

//ES5
var ages5 = years.map(function(el){
    return 2020 -el;
});
//map배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

console.log(ages5);

//ES6
let ages6 = years.map(el => 2020- el);
console.log(ages6);
// =>를 사용하면 function, return 을 없앨수 있다.

ages6 = years.map((el,index) =>
    `Age element ${index +1} :${2020-el}.`);
console.log(ages6);

ages6 = years.map((el,index) => {
    const now = new Date().getFullYear();
    const age = now -el;
    return `Age element ${index +1}: ${age}.`

});

console.log(ages6);

