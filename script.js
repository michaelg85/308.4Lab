// Part 1: Refactoring Old Code
// When code is outdated or inefficient, it often goes through a process called “refactoring.” Refactoring code is the process of restructuring that code without changing its original behavior.
// For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs. Now that you have knowledge of arrays and objects, how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.

let array = [
  [`ID`,`Name`,`Occupation`,`Age`],
  [`42`,`Bruce`,`Knight`,`41`],
  [`57`,`Bob`,`Fry Cook`,`19`],
  [`63`,`Blaine`,`Quiz Master`,`58`],
  [`98`,`Bill`,`Doctor’s Assistant`,`26`],
  ];
  
  console.log(array)




  
//   Part 2: Expanding Functionality
// Now that you are familiar with your code, and perhaps have improved it, it is time to expand upon its functionality.
// Begin with the following task:
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
// For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.
// After you have implemented the above:
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.

let array2 = [
  [`ID`,`Name`,`Occupation`,`Age`],
  [`42`,`Bruce`,`Knight`,`41`],
  [`57`,`Bob`,`Fry Cook`,`19`],
  [`63`,`Blaine`,`Quiz Master`,`58`],
  [`98`,`Bill`,`Doctor’s Assistant`,`26`],
  ];
  
  console.log(array2)
// Cache this two-dimensional array in a variable for later use.






//  Part 3: Transforming Data
// While the data is now much more workable than it was in its string format, there is still a large amount of obscurity in the data itself. When we access an arbitrary index of the results array, it is impossible to know what that data is referring to without additional cross-referencing.
// In order to make it more obvious what the data is, we will transform our rows into objects.
// Implement the following:
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

let array3 = {
  id: ``,
  name: ``,
  occupation: ``,
  age: ``,
};
let string = [
  [`42`,`Bruce`,`Knight`,`41`],
  [`57`,`Bob`,`Fry Cook`,`19`],
  [`63`,`Blaine`,`Quiz Master`,`58`],
  [`98`,`Bill`,`Doctor’s Assistant`,`26`]
]
  
  console.log(array3, string[0])
  console.log(array3, string[1])
  console.log(array3, string[2])
  console.log(array3, string[3])






//  Part 4: Sorting and Manipulating Data
// It is important to know how to work with data in this format, an array of objects, as it is one of the most commonly used data formats in JavaScript.
// Using array methods, accomplish the following tasks, in order upon the result of Part 3:
// Remove the last element from the sorted array.
string.pop();
console.log(array3, string)
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
string.splice(1, 1, `48`,`Barry`,`Runner`,`25`)
console.log(array3, string)
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
string.push(`7`,`Bilbo`,`None`,`111`)
console.log(array3, string)
// So far, the results should look like this:
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.
const bruce = [string[0][3]]
const bob = [string[1][3]]
const blaine = [string[2][3]]
const bill = [string[3][3]]

let avgAge = ``

if (avgAge = (bruce * bob * blaine * bill) / 4){
  console.log(`Average Age`, avgAge)
}





//  Part 5: Full Circle
// As a final task, transform the final set of data back into CSV format.
// There are a number of ways to do this; be creative!
// Once complete, be sure to submit your work according to the submission instructions at the beginning of this document.


for (let i = 0; i < string.length; i++){
  console.log(string.lenght)
}