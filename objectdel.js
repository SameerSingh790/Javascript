var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 }


console.log(student)
const array = Object.entries(student);//convert object into 2d array
array.splice(2,1);                    //delete the roll number from array using splice method
const result = Object.fromEntries(array)//convert 2d array into object again
console.log(result)
