/*
Data Types in JS:

1. Primitive Data Types [mem. allocation type: Stack]: These are actually base form of data types.
    1. String -> "Himangshu"
    2. Numbers -> 6545
    3. Boolean -> true, false
    4. Null -> [Empty]
    5. Undefined -> default value undefined
    6. Symbols -> This is latest in ES6

2. Reference Data Types [mem. allocation type: Heap]: These are actually derived form of data types.
    1. Arrays
    2. Object Literals
    3. Functions
    4. Dates
*/

//Primitive Data Types
//string
let name = "Himangshu";
console.log("My name is "+ name);
console.log("My data type is: " + (typeof name));

//Numbers
let marks = 34;
console.log("Data type is: "+ (typeof marks))

//Null
let nullVar = null;
console.log("Data type is: "+ (typeof nullVar));

//Boolean
let mainBool = true;
console.log("Data type is: "+ (typeof mainBool));

//undefined
let undef = undefined;
console.log("Data type is: "+ (typeof undef));



//Reference Data Types
//Arrays
let myarr = [1,2,34,651,9151,61, false, "string"];
console.log("Data type is: "+ (typeof myarr));

//Object Literals
let StMarks = {
    himangshu: 99,
    Manish: 36,
    Mansoor: 48
}
console.log(StMarks);
console.log(typeof StMarks);
function FindName() {
    
}
console.log(typeof FindName);

let date = new Date();
console.log(typeof date);