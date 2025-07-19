// Q1 to print odd numbers betwween 0 to 200
// for(let n = 0; n<=200; n++){
//     if(n %2 !== 0){
//         console.log("num ",n);
//     }
// }
// Q2 to create a gussing game 
// let gameNum = 39;
// let userNum = prompt("Guess the number!!: ");
// while(userNum != gameNum){
//     userNum = prompt("you entered the wrong number!!, guess again !");
// }
// console.log("Congratulations!! you entered right number")

// Q3 to generate username by entering fullnameof user

//  function generateUsername(fullName) {

//     let username = fullName.toLowerCase();

//     username = username.replace(/a/g, "@")
//                        .replace(/s/g, "$")
//                        .replace(/i/g,"!")
//                        .replace(/v/g,"^")
//                        .replace(/h/g, "#");

//     return username + fullName.length;

// }

// let fullName = prompt("Enter your full name without spaces");
// console.log(generateUsername(fullName));

// let nums = [2,4,7,8,9,5,3];
// nums.forEach((num) => {
//     console.log(num*num);
// });

// function PrintVowel(str) {
//     let count =0;
//     for(const char of str){
//         if(
//             char === "a"||
//             char === "i"||
//             char === "e"||
//             char === "o"||
//             char === "u"
//         )
//         count++;
//     }
//     console.log(count);
// }

// arr = [23,44,67,87];
// arr.forEach(val => {
   
//     console.log(val*val);
    
// });

// arr = [90,78,89,99,97,95,92,83];
// const output = arr.filter((val) =>{
//     return val>90;
// });
// console.log(output);      

// let n = prompt("enter any number");

// let arr = [];
// for(let i = 1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);
// let sum = arr.reduce((prev,curr)=>{
//     return prev+curr;
// });

// console.log(sum);

// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for( div of divs) {
//     div.innerText = `New Index ${idx}`;
//     idx++;
// }

// let btn = document.createElement("button");
// btn.innerText = "Click Me !";
// btn.style.color = "white";
// btn.style.backgroundColor = "red";
// btn.style.width = "78px"
// btn.style.height = "89px"
// btn.style.borderRadius = "32px"
// document.querySelector("body").prepend(btn);

let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("button was clicked !");
    let a = 1;
    a++;
    console.log(a);
}
