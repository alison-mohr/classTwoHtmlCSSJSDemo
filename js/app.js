'use strict';
//first thing to do
console.log('This file is connected');


//prompt our user for input data
var userName = prompt('What is your name?');
console.log(userName);

//Greet the user
alert('Hello,' + userName);

//convert the input to lowercase
var lowerCaseName = userName.toLowerCase();
console.log(lowerCaseName);


//validate the input using conditional logic using strings
if(lowerCaseName === 'craig' || lowerCaseName === 'bob') {
  alert('Welcome back to my page, ' + userName);
} else {
  alert('Welcome new user to my page');
}

//logical operator
var myBooleanValueTrue = false;
var anotherBooleanValueFalse = false;
var thirdBooleanValueTrue = true;

if (myBooleanValueTrue && thirdBooleanValueTrue){
  alert('The && will run if both are true');
  console.log('both values were true');
} else if(myBooleanValueTrue || anotherBooleanValueFalse){
  alert('The || will run if one of the values was true');
  console.log('one of the values was true');
} else if(thirdBooleanValueTrue){
  alert('the 3rd value was true, so this will run');
  console.log('thirdBooleanValueTrue was true');
} else {
  console.log('There were no true values.');
}
