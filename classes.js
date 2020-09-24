//Lecture :classes

//ES5
// var Person5 = function (name, yearOfBirth,job){
//   this.name =name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };
//
// Person5.prototype.calculateAge =
//     function (){
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
//
// }
//
//
// var john5  = new Person5('John',1990,'teacher');
//
// //ES6
// class Person6{
//     constructor(name,yearOfBirth,job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }
//     calculateAge(){
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//
//     }
//     static greeting(){
//         console.log('Hey there!');
//     }
// }
//
// //class 안에 생성된method는 function 이나 ; 필요없다
// const john6 = new Person6('John',1990,'teacher');
// Person6.greeting();

//Lecture :Classess and subClasses

    var Person5 = function (name, yearOfBirth,job){
        this.name =name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    };

    Person5.prototype.calculateAge =
    function (){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);

    }

    var Athlete5 = function (name, yearOfBirth, job,olympicGames, medals){

        Person5.call(this,name, yearOfBirth,job);
        //super class를 부른다.

        this.olympicGames = olympicGames;
        this.medals = medals;

        //new Object( new instance)로 빈 객체를 만든다.
        //this에 새로 만들어진 athlete객체가 들어감
    }


    Athlete5.prototype = Object.create(Person5.prototype);

    Athlete5.prototype.wonMedal =
    function (){
        this.medals ++;
        console.log(this.medals);
    };
    var johnAthlete5  = new Athlete5('John',1990,'swimmer',3,10);
    // prototype가 Athelete5라고 나온다. Athlete5의 property가 Person5의 property와 동일하다는 의미다.
    //Person5가 Athlete5의 subclass임을 의미

    johnAthlete5.calculateAge();
    johnAthlete5.wonMedal();


//ES6
    class Person6{
        constructor(name,yearOfBirth,job) {
            this.name = name;
            this.yearOfBirth = yearOfBirth;
            this.job = job;
        }
        calculateAge(){
            var age = new Date().getFullYear() - this.yearOfBirth;
            console.log(age);

        }
        static greeting(){
            console.log('Hey there!');
        }
    }

    class Athlete6 extends Person6{
        constructor(name, yearOfBirth,job,olymicGames,medals) {
            super(name,yearOfBirth,job);
            this.olymicGames = olymicGames;
            this.medals = medals;
        }
        wonMedal(){
            this.medals++;
            console.log(this.medals);
        }
    }

    const jognAthlete6 = new Athlete6('John',1990,'swimmer',3,10);

    jognAthlete6.wonMedal();
    jognAthlete6.calculateAge();
















































