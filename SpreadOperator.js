//lecture:Spread Operator

function addFourAges(a,b,c,d){
    return a+b+c+d;
}

var sum1 = addFourAges(18,32,19,20);
console.log(sum1);

//ES5
var ages = [18,32,19,20];
var sum2 = addFourAges.apply(null,ages);
//apply 주어진 this값과 배열로 제공되는 arguments로 함수를 호출한다.
//call 과 유사하지만 차이점은 call은 함수에 전달 될 인수 리스트를 받고 apply는 인수들의 배열을 받는다.

console.log(sum2);


//////apply 예제
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2


//////call 예제
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese


//
// //ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3);
//
//
// const familySmith =['Anne','Marila','Gilbert','Mathew'];
// const familyMiller =['Joohee','Sungjune','Katie','Marilyne'];
//
// const bigFamily = [...familySmith,...familyMiller];
//
// console.log(bigFamily);
//
// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// //추출된 node list를 따라 색을 바꿔준다
//
// const all =[h,...boxes];
// //h와 boxes 의 모든 노드 고르기
//
// Array.from(all).forEach(curr => curr.style.color='purple');
//
//
//
//
//












