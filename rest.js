//Lecture :Rest parameters

// //ES5
// function isFullAge5(){
//     //console.log(arguments);
//     var argsArr =
//         Array.prototype.slice.call(arguments);
//
//     argsArr.forEach(function (curr){
//         console.log((2020-curr)>=18);
//     })
// }
//
// //arguments : 함수의 모든 변수에 접근할 수 있게하는 변수
//
// // isFullAge5(1990,2017,1976);
// // //proto : 객체.배열이 아니다
// // isFullAge5(1990,2017,1976,2010,1900);
//
// //ES6
// // function isFullAge6(...years){
// //     console.log(years);
// // };
// //
// // isFullAge6(1990,2017,1976,2010,1900);
// // //proto 배열로 출력된다.
// //
//
//
// function isFullAge6(...years){
//     years.forEach(curr =>
//         console.log(
//             (2020 -curr) >=18
//         )
//     );
// };
//
// isFullAge6(1990,2017,1976,2010,1900);
//

//ES5
function isFullAge5(limit){
    //console.log(arguments);
    var argsArr =
        Array.prototype.slice.call(arguments,1);
        console.log(argsArr);
        //배열의 첫번째를 limit으로 설정하고 slice로 쪼개 index 1 부터의 배열을 추출한다.
    argsArr.forEach(function (curr){
        console.log((2020-curr)>=18);
    })
}
 isFullAge5(21,1990,2017,1976,2010,1900);

//ES6
function isFullAge6(limit,...years){
    //variable에 넣는것 만으로 첫번째 index는 limit 으로 여긴다.
    years.forEach(curr =>
        console.log(
            (2020 -curr) >=18
        )
    );
};

isFullAge6(16,1990,2017,1976,2010,1900);



