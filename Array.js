//Lecture: Arrays

const boxes = document.querySelectorAll('.box');

//노드 리스트를 뽑아낸다

//ES5
var boxesArr5 =
    Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (curr){
    curr.style.backgroundColor ='dodgerblue';
})

//ES6

const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(curr => curr.style.backgroundColor ='dodgerblue');

Array.from(boxes).forEach(curr => curr.style.backgroundColor ='dodgerblue');


//ES5

// for(var i = 0;i<boxesArr5.length;i++){
//     if(boxesArr5[i].className === 'box blue'){
//         continue;
//         //for 루프를 벗어나서 다음 항목으로 바로 넘어감
//         //break는 루프를 끝내고 반복하지 않음 -> 첫번째 항목만 변경하고 루프 깨짐
//     }
//     boxesArr5[i].textContent = 'I changed to blue !';
// };

//ES6

// for(const curr of boxesArr6){
//     if(curr.className === 'box blue'){
//         continue;
//     }
//     curr.textContent = 'I changed to blue !';
//
// };
//

for(const curr of boxesArr6){
    if(curr.className.includes('blue')){
        continue;
    }
    curr.textContent = 'I changed to blue !';

};

//box className을 찾을 때 전체 이름을 찾는 방법말고 해당 String이 className에 속해있는지 확인하는 방법도 있다.


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
//curr >= 18 값이 true인 경우의 curr만 뽑아낸다
console.log(ages.find(curr => curr >=18));
//index를 찾지 않고도 뽑아 낼 수 있음

































