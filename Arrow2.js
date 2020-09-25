//Lecture : Arrow function2

//ES5
var box5 ={
    color:'green',
    position:1,
    clickMe:function (){
        var self = this;
        document.querySelector('.green').addEventListener('click',function (){
            var str = 'This is box number '+self.position+' and it is '+self.color;
            alert(str);
        });
    }
}

//box5.clickMe();

//this.position, this.color 모두 undefined가 뜬다 이유:
//callback function과 eventHandler 는 method 가 아니라 regular function이다. 따라서 this가 box의 객체를 향하지 않고 window를 향함
//window는 color, position이 할당되지않았기 떄문에 undefined가 뜬다.

//ES6
var box6 ={
    color:'green',
    position:1,
    clickMe:function (){
        document.querySelector('.green').addEventListener('click',() => {
            var str = 'This is box number '+this.position+' and it is '+this.color;
            alert(str);
        });
    }
}

//box6.clickMe();

//arrow 함수가 this 키워드를 공유하도록 함
//this 키워드를 유지하고 싶으면 항상 arrow 함수를 사용하는 것이 좋다.

//ES6
var box66 ={
    color:'green',
    position:1,
    clickMe:() => {
        document.querySelector('.green').addEventListener('click',() => {
            var str = 'This is box number '+this.position+' and it is '+this.color;
            alert(str);
        });
    }
}

//box66.clickMe();
//undefined 뜨는 이유:
//clickMe가 arrow function을 사용하면 global context = window 의 this를 가져오게 된다.

function Person(name){
    this.name = name;
};

//ES5
Person.prototype.myFriends5 =
    function (friends){
        var arr = friends.map(function (el){
           return this.name +' is friends with ' +el;
        });
        //console.log(arr);
    };

var friends = ['Bob','Jane','Kim'];

new Person('John').myFriends5(friends);
//element 안에 'John'이 들어가지 않는다.this 가 Person의 element인 'John'이 아닌 window를 뜻하기 때문이다.

Person.prototype.myFriends5 =
    function (friends){
        var arr = friends.map(function (el){
            return this.name +' is friends with ' +el;
        }.bind(this));
       // console.log(arr);
    };


new Person('John').myFriends5(friends);
//이때 .bind(this)를 추가하면 function (el){
//             return this.name +' is friends with ' +el;
//         }가 복사되고 복사된 함수가 바로 불러와진다.또한 괄호안에 입력된 variable이 function내부의 variable this에 접근할 수 있게된다.


//ES6
Person.prototype.myFriends6 =
    function (friends){
        var arr = friends.map(el => `${this.name} is friends with ${el}`);
        console.log(arr);
    };

new Person('Mike').myFriends6(friends);


