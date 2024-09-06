let numbers = [2, 4, 6, 8, 10];

function sumArray(array) {

  if (array.length === 0) return 0;
  
  return array[0] + sumArray(array.slice(1));
}
console.log(sumArray(numbers)); 
    
function avgArray(array) {
  //if (array.length === 0) return 0;

  //return array[0] + avgArray(array.slice(1))
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
return sum/array.length;
}

console.log(avgArray(numbers));


let array = ['shrimps','is','bugs',3]; {

  //if (stringsLongerThan(['shrimps','is','bugs',3]))
    
  //return (array[0] < 2)
  function longestString() {
    let longestString = '';
    for (let i = 0; i < array.length; i++) {
        if (
            typeof array[i] === "string" &&
            array[i].length > longestString.length
        ) {
            longestString = array[i];
        }
    }
    return longestString;
}}

console.log(longestString());

function stringsLongerThan() {
  let stringsLongerThan = 3;
  for (let i = 0; i < array.length; i++) {
    if (
        typeof array[i] === "string" &&
        array[i].length > stringsLongerThan
    ) {
        stringsLongerThan = array[3];
    }
}
return stringsLongerThan;
}
console.log(stringsLongerThan);

let n = 18

function printNum(n) 
{
  
  if (n > 18){
   
    return;
  }
    console.log(n);

    printNum(n + 1);
    
}

printNum(1)

const thisArray = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

console.log(thisArray.sort);

const age = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
  { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }

];


age.sort((a, b) => a.age - b.age
);

console.log(age);

let oldies = age.filter(age => age.value >= 50);
console.log(Array.from (oldies));








