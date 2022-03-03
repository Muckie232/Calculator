
function validateName(input){
     if(input =='' || input === undefined || input === null || typeof(input) !== String ){
         return alert('invalid input! please enter a valid name')
     }
    }
function validateYOB(input){
     if(input =='' || input === undefined || input === null || typeof(input) !== Number ){
         return alert('invalid input! please enter a valid YEAR')}
     }
function validateCY(input){
     if(input =='' || input === undefined || input === null || typeof(input) !== Number ){
         return alert('invalid input! please enter a valid YEAR')
     }
    }
function calc(){
const myName = document.getElementById('nme').value
validateName(myName)
let YOB = document.getElementById('input2').value
validateYOB(DOB)
var currentYear = document.getElementById('input3').value
validateCY(currentYear)
let myAge = currentYear - DOB


if(myAge < 18){
    document.querySelector('.lbl').innerHTML = `My name is ${myName}
    and i am ${myAge} years old and am still a child`
    document.getElementById('input1').value = ''
    document.getElementById('input2').value = '' 
    document.getElementById('input3').value = ''
}else if(myAge <= 40){
    document.querySelector('.lbl').innerHTML = `My name is ${myName}
    and i am ${myAge} years old and am an adult`
    document.getElementById('input1').value = ''
    document.getElementById('input2').value = ''
    document.getElementById('input3').value = ''
}else {
    document.querySelector('.lbl').innerHTML = `My name is $(myName)
    and i am $(myAge) years old and i am veryyyyyy old`
    document.getElementById('input1').value = ''
    document.getElementById('input2').value = ''
    document.getElementById('input3').value = ''
}
}