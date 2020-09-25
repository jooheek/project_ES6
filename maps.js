//Lecture :maps

const question = new Map();

question.set('question','What is the official name of the latest major Javascript version?');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct',3);
question.set(true,'correct answer');
question.set(false,'Wrong!!');

console.log(question.get('question'));
console.log(question.size);

//data를 삭제하고 map에 남아있는지 확인할 수 있다.
/*

if(question.has(4)){
    //question.delete(4);

    console.log('Answer 4 is here');
}

question.clear();

//forEach 는 map의 prototype 이기 때문에 모든 map의 기능을 사용할 수있다.
question.forEach(
    (value,key)=> console.log(`This is key ${key}, and its set to ${value}`)
);
*/



for(let [key,value] of
    question.entries()){
    if( typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}
//key의 값이 숫자면 문항을 출력한다.
//.entries() 각 question에 해당하는 답변들을 받아준다.

const ans = parseInt(prompt('write the correct answer'));
//질문 데이터를 객체에 담고 있다면 if else 문으로 각 답변에 대한 응답이 맞는지 틀린지 확인 할 수 있다.
//하지만 질문 데이터를 map에 담고 있기 때문에 true 가 뜬다면 그에 맞는 value인 correct answer을 띄우고
//false이면 Wrong!!을 띄워야한다.

console.log(question.get(ans === question.get('correct')));
//promt에 입력된 int가  'correct'의 value와 같으면
