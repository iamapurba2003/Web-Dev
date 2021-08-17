console.log("JS-Variables");
// Variables in JS
// var, const, let are the types of variables in JS
// var name = `Himangshu "" De`;
var name = "Himangshu De";
var channel;
var marks = 34;
channel = "The-Tech-Firm";
console.log(name, channel, marks)

// Rules for creating JS Variables
/*
1. Cannot start with SVGAnimatedNumberList
2. Can start with letter, $
3. Are case sensitive
*/
var city = "Chakdaha"
console.log(city)

const mainname = "Himangshu"
// mainname = "De" //cannot do this!
console.log(mainname)
const fruit = "Apple";
console.log(fruit);

// Let variable type works only in blocks
{
    let city = "Kolkata"
    city = "jaipur"
    console.log(city)
    
}
console.log(city)


const arr = [12, 34, 54, 50, 90]
arr.push(51)
console.log(arr)

/*
Most common programming case types:

1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/