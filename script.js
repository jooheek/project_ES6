
//Lecture:let,const

//ES5
var name5 ='Jane Smith';
var age = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 ='Jane Smith';
//나이는 계속 변하기 때문에 let 을 사용
// let age6 =23;
// name6 ='Jane Miller';
// console.log(name6);
//const는 변경 불가능 하기 때문에 Uncaught TypeError : assignment to const variable 오류가 발생
//ES5 are function-scoped vs. ES6 are block-scoped


//ES5
function driversLicense5(passedTest){
    if(passedTest){
        console.log(firstname);
        //ES5에서는 변수가 선언되기 전에 불러오면 undefined 라고 뜨게 된다.

        var firstname ='John';
        var yearOfBirth = 1990;
    }
    console.log(firstname +' , born in '+yearOfBirth );

}

driversLicense5(true);

//ES6

function driversLicense6(passedTest){

    //console.log(firstname);
    //ES6 에서는 변수가 선언되기 전에 불러오면 Uncaught ReferenceError 발생
    //이유: temporal-dead zone
    let firstname;
    const yearOfBirth = 1990;
    
    if(passedTest){
         firstname ='John';

    }
    console.log(firstname +' , born in '+yearOfBirth );

}

driversLicense6(true); 

// ES5에서는 멀쩡하게 작동하지만 ES6버전에서 Uncaught ReferenceError발생하는 이유 : 
//ES6는 block-scoped이기 때문에 변수들이 if block안에서만 유효하다.
//하지만 ES5는 function-scoped이기 때문에 함수내 이기만 하면 어디서든 유효함

//ES6에서 변수를 함수내에서 사용하려면 function variable로 정의해야함 
//특히나 const는 변하지 않는 수를 설정하기 떄문에 할당되는 값까지 작성해야함



let i =23;
for(let i =0; i< 5;i++){
    console.log(i);
}
console.log(i);
// 동일한 변수 i에 다른 수를 정의했지만 block 단위로 실행되기 떄문에
//0,1,2,3,4,23이 찍힌다.

var i =23;
for(var i =0; i< 5;i++){
    console.log(i);
}
console.log(i);

//var은 function단위로 실행되기 때문에
//0,1,2,3,4,5가 찍힌다.




