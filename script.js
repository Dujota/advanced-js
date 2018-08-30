// // var john = {
// //   name: 'John',
// //   yearOfBirth: 1990,
// //   job: 'teacher'
// // };
// john.name


// var Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person.prototype.calculateAge = function () {
//   console.log(2018 - this.yearOfBirth);
// } // prototype method

// Person.prototype.mood = 'Happy' // property

// var john = new Person('John', 1990, 'teacher');
// var mary = new Person('Mary', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');



// console.log(john);
// console.log(mary);
// // console.log(mark);


// john.calculateAge()
// console.log(john.mood)

// mary.calculateAge()
// mark.calculateAge()


/////////// Object.create

// var personProto = {
//   calculateAge: function () {
//     console.log(2018 - this.yearOfBirth);
//   }
// }

// //mehtod 1
// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// console.log(john);
// john.calculateAge();

// // method 2
// var mary = Object.create(personProto, {
//   name: {value: 'Mary'},
//   yearOfBirth: {value: 1969},
//   job: {value: 'designer'}
// })

// console.log(mary);
// mary.calculateAge();

///// Primitives vs Objects

// // Primitives
// var a = 23
// var b = a;
// a = 50;

// console.log(a);
// console.log(b);


// console.log('----------------------------------');

// // Object
// var obj1 = {
//   name: 'john',
//   age: 28
// }

// var obj2 = {
//   name: 'john',
//   age: 28
// }




// var obj2 = obj1
// obj1.age = 30;

// console.log(obj1);
// console.log(obj2);

// console.log('----------------------------------');


// var age = 27;
// var obj = {
//   name: 'Denis',
//   city: 'Tdot'
// };

// function change(a,b){
//   a = 30;
//   b.city = 'Montreal'
// }

// change(age, obj)

// console.log(age);
// console.log(obj.city);

// var obj1 = {
//   name: 'john',
//   age: 28
// }

// var obj2 = {
//   name: 'john',
//   age: 28
// }

// if (obj1 === obj2){
//   console.log(true);

// } else {
//   console.log(false);
// }

// Funtions as First Class Citizens --- 1.) Passing Functions as arguments

// var years = [1990, 1965, 1937, 2015, 1998];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i =0; i < arr.length; i++){
//     arrRes.push(fn(arr[i]))
//   }
//   return arrRes;
// }

// function calculateAge(element) {
//   return 2018 - element;
// }

// function isDrinkingAge(element) {
//   return element > 19;
// }

// function maxHeartRate(element) {
//   if (element >= 18 && element <= 81) {
//     return Math.round(206.9 - (0.67 * element))
//   } else {
//     return -1
//   }
// }


// var agesCalculated = arrayCalc(years, calculateAge)
// var drinkingAge = arrayCalc(years, isDrinkingAge)
// var maxHeartRate = arrayCalc(years, maxHeartRate)

// console.log(agesCalculated);
// console.log(drinkingAge);
// console.log(maxHeartRate);

// Functions returning functions
// function interviewQuestions(job) {
//   if ( job === 'designer'){
//     return function(name) {
//       console.log(`${name} can you please define UI/UX?`);
//     }
//   } else if (job === 'teacher') {
//     return function (name) {
//       console.log(`${name} what is you strongest subject?`);
//     }
//   } else {
//     return function (name) {
//       return console.log(`Hey ${name}, what is it that you do exactly?`)
//     }
//   }
// }

// var teacherQuestion = interviewQuestions('teacher')
// var designQuestion = interviewQuestions('designer')

// designQuestion('Mark')
// teacherQuestion('Mary')

// interviewQuestions('teacher')('Jimmy')

// console.log(teacherQuestion);

// IIFE
// immmediately invokable function expression
// console.log(outerHeight);

// for (var outerHeight=0; outerHeight < 10; outerHeight++) {
//   console.log(outerHeight);
// }
// console.log('`````````````````````');

// console.log(outerHeight);

// console.log('`````````````````````');


// for (index; index < 10; index++) {
//   console.log(index);
// } --- will never run due to scope leak


// function functionName() {
//   var i = 100
//   console.log(i);
// }
// functionName();

// function game() {
//   var score = Math.random() * 10
//   console.log(score >= 5);
// }
// game();


// (
//   function () {
//   var name = Math.random() * 10;
//   console.log(name >= 5);
//   }
// )();

// {
//   let name = Math.random() * 10;
//   console.log(name >= 5);
// }