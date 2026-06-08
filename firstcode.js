"use strict";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("mybutton").onclick = function () {
    document.getElementById("myheading").innerHTML =
      "<b style='color:red'> Welcome Riffat!</b>";
  };
});
function addnum(a, b) {
  let result = a + b;
  return result;
}
console.log(addnum(5, 3));
console.log(addnum(10, 20));
console.log(addnum(50, 200));
const myname = "Riffat";
const myjob = "Web developer";
function introduce(name, job) {
  return "My name is " + name + " and I am a " + job;
}
console.log(introduce(myname, myjob));

//long calculate age
/*const year = 2026;
const birthday = 1990;
function calcage(currentyear, birthyear) {
    let age = currentyear - birthyear;
    return "your age is " + age + " years";

}
console.log(calcage(year, birthday));
*/
function calcage(birthyear) {
  let age = 2026 - birthyear;
  return "your age is " + age + " years";
}
console.log(calcage(1990));
//Student report card
/*const studentName = "Riffat";
const marks = 85;
const totalmarks = 100;
let isPass = marks >= 50;
function result(smarks, tmarks) {
    let percentage = smarks / tmarks * 100;
    //return studentName + " got " + percentage + "% and is pass: " + isPass;
    return `${studentName} got ${percentage}% and is pass: ${isPass}`;
}
console.log(result(marks, totalmarks));*/

//Grade calculator
const marks = 95;
const studentName = "Riffat";
let grade = null;
if (marks > 90) grade = "A Grade";
else if (marks > 80) grade = "B Grade";
else if (marks > 70) grade = "C Grade";
else if (marks > 50) grade = "D Grade";

console.log(`${studentName} got ${grade}`);
const ispass = marks >= 50 ? "Pass" : "fail";
console.log(ispass);
//For loop table
const t = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${t} x ${i} = ${t * i}`);
}
//Array + loop practice
const students = ["Riffat", "Sara", "Ayesha", "Fatima"];
for (let i = 0; i < students.length; i++) {
  console.log(`Student ${i + 1} : ${students[i]}`);
}
