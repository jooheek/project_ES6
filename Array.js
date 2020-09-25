//Lecture: Arrays

const boxes = document.querySelectorAll('.box');

//노드 리스트를 뽑아낸다

//ES5
// var boxesArr5 =
//     Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function (curr){
//     curr.style.backgroundColor ='dodgerblue';
// })
    
//call() 다른 객체의 함수를 자기것 처럼 사용함

//ES6
//
 const boxesArr6 = Array.from(boxes);
// //from 유사 배열객체나 반복 가능한 객체를 얕게 복사해 새로운 array 객체를 만든다.
//  boxesArr6.forEach(curr => curr.style.backgroundColor ='dodgerblue');
//
// Array.from(boxes).forEach(curr => curr.style.backgroundColor ='dodgerblue');
//

// //ES5
// for(var i = 0;i<boxesArr5.length;i++){
//     if(boxesArr5[i].className === 'box blue'){
//         continue;
//         //for 루프를 벗어나서 다음 항목으로 바로 넘어감
//         //break는 루프를 끝내고 반복하지 않음 -> 첫번째 항목만 변경하고 루프 깨짐
//     }
//     boxesArr5[i].textContent = 'I changed to blue !';
// };

//ES6
////////version.1
// box className으로 이름이 일치하는 box를 찾음
// for(const curr of boxesArr6){
//     if(curr.className === 'box blue'){
//         continue;
//     }
//     curr.textContent = 'I changed to blue !';
//
// };


///////version .2
//include()로 해당 String이 className에 속해있는지 확인하는 방법도 있다.

/*
for(const curr of boxesArr6){
    if(curr.className.includes('blue')){
        continue;
    }
    curr.textContent = 'I changed to blue !';

};
*/



//ES5
var ages =[12,17,8,21,14,11];

var fullAge = ages.map(function (curr){
    return curr >= 18;

});

console.log(fullAge);

console.log(fullAge.indexOf(true));

console.log(ages[fullAge.indexOf(true)]);


//ES6
console.log(ages.findIndex(curr => curr >= 18));
//curr >= 18 값이 true인 경우의 curr의 index를 뽑아낸다.

console.log(ages.find(curr => curr >=18));
//index를 찾지 않고도 뽑아 낼 수 있음

