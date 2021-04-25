// // // EXERCISE 1 //

// // #1               a = 3;
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//   
// alert(a);
// } 

// //#2                a = 0 unless you call the function, then a = 5
// var a = 0;
// function q2() {
//     a = 5;
// }

// //                  a = 0
// function q22() {
//     alert(a);
// }


// // #3               a = undefined
// function q3() {
//     window.a = "hello";
// }
// //                  a = undefined
// function q32() {
//     alert(a);
// }

// //#4               a = "test" after calling the function
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }

// //#5            a = 5;
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);



// =========== EXERCISE 2 Ternary Operator ============= //
// 1.  Change the conditional into a ternary and assign the function to a variable called experiencePoints.

// function winBattle(){
//     return true;
// }

// let experiencePoints = winBattle() ? 10: 1;


// EXERCISE 3 //
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…


let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let arr1 = [];
colors.forEach(function(item, i) {
    arr1[i] == arr1.push(`My #${i+1} choice is ${colors[i]}.`)
})


// EXERCISE 4: COLORS #2 
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];
let newarr = []

color.forEach((item, i) => {
    let newstr = (i<3) ? ordinal[i+1] : ordinal[0]
    newarr[i] = (`${i+1}${newstr} choise is ${item}`)    
})
console.log(newarr)


// EXERCISE 5: IS IT A STRING
// Write a JavaScript function that checks whether the value of an input is a string or not.

function isString(elem) {
    return typeof(elem) === "string";
   
}
console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false


// EXERCISE 6: Bank Details

let bankAmount = 0;
let vat = 0;
const details = ["+200", "-100", "+146", "+167", "-2900"];

details.forEach((item, i) => {
    let numbers = parseInt(details[i])
    vat = numbers * 17/100;
    numbers += vat
    bankAmount += numbers;
})
console.log(bankAmount)

let sum = 0;
details.forEach((item, i) => {
    sum += parseInt(details[i]);
})
console.log(sum);