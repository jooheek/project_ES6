//lecture:Spread Operator

function addFourAges(a,b,c,d){
    return a+b+c+d;
}

var sum1 = addFourAges(18,32,19,20);
console.log(sum1);

//ES5

var ages = [18,32,19,20];
var sum2 = addFourAges.apply(null,ages);

//bind,call,apply
console.log(sum2);


//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith =['Gilbert','Mathew','Anne','Marila'];
const familyMiller =['Joohee','Sungjune','Katie','Marilyne'];

const bigFamily = [...familySmith,...familyMiller];

console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
//추출된 node list를 따라 색을 바꿔준다

const all =[h,...boxes];
//h와 boxes 의 모든 노드 고르기

Array.from(all).forEach(curr => curr.style.color='purple');

















