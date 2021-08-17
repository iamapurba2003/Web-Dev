// type conversion and coercion
console.log('Type Conversion and Coercion');
let myVar;
//Before Conversion
console.log("Before Conversion");
myVar = 34;
console.log(myVar, (typeof myVar));
//After Conversion
console.log("After Conversion");
myVar = String(34);
console.log(myVar, (typeof myVar));

//before Conversion
console.log("Before Conversion");
let boolVar = true;
console.log(boolVar, (typeof boolVar));

//After Conversion
console.log("After Conversion");
let boolVar1 = String(true);
console.log(boolVar1, (typeof boolVar1));

//Before Conversion
console.log("Before Conversion")
let date = new Date();
console.log(date, (typeof date))

//After Conversion
console.log("After Conversion")
let date1 = String(new Date());
console.log(date1, (typeof date1))

//Before Conversion
console.log("Before Conversion")
let arr = [1,2,32,4,6,5]
console.log(arr, (typeof arr))

//After Conversion
console.log("After Conversion")
let  arr1 = String([1,2,32,4,6,5]);
console.log(arr1, (typeof arr1))

let main = 85;
console.log(main.toString(), typeof main);
main = Number("85");
// main = Number("8s5")
console.log(main, (typeof main));

let number = parseInt("355.4552451554");
console.log(number, typeof number)

number = parseFloat("355.4552451554");
// number = "355";
console.log(number, typeof number)
console.log(number.toFixed(5), typeof number)


// Type coercion
let mystr = "692";
let myNo = 51;
console.log(mystr + myNo);
mystr = Number("692");
myNo = 51;
console.log(mystr + myNo);