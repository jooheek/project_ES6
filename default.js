//Lecture: default parameters

// //ES5
// function SmithPerson (firstName,lastName,yearOfBirth,nationality){
//
//     yearOfBirth === undefined ? yearOfBirth =1990: yearOfBirth = yearOfBirth;
//     nationality === undefined ? nationality ='Korea':nationality= nationality;
//
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.yearOfBirth=yearOfBirth;
//     this.nationality=nationality;
// }
//
// var john = new SmithPerson('John','Smith');
// //console에서 john을 입력하면 yearOfBirth,nationality가 undefined인 배열이 출력된다.
//
// var emily = new SmithPerson('emily','1990');

//ES6
 function SmithPerson(firstName,yearOfBirth,lastName ='Smith',nationality='american'){
    this.firstName=firstName;
    this.lastName=lastName;
    this.yearOfBirth=yearOfBirth;
    this.nationality=nationality;
 };

 var john = new SmithPerson('John',1986);

 var emily = new SmithPerson('emily',1990,'Diaz','Spanish');

