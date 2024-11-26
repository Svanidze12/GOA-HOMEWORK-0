// every:
// All Numbers Positive: Check if every number in an array is positive.
// All Strings Non-Empty: Verify if every string in an array is non-empty.
// All Booleans True: Confirm if every boolean in an array is true.
// // All Numbers Even: Check if every number in an array is even.
// Create manual function of every

// 1

// const lists = [1,2,3,-2,-5,10];

// const listn = lists.every(function(element){
//     return element > 0
// })

// console.log(listn)

// 2

// const lists = ["atuka"," ","janjds"]

// const listn = lists.every(function(element){
//     return element.length > 0
// })

// console.log(listn)

// 3

// const lists = [true,true,true,false]

// const listn = lists.every(function(element){
//     return element == true
// })

// console.log(listn)

// 4

// const lists = [1,23,4,5,6];

// const listn = lists.every(function(element){
//     return element % 2 == 0
// })

// console.log(listn)

// 5

// function everyFunc(lists){
//     for (let i = 0;i < lists.length;i++){
//         if (lists[i] % 2 != 0){
//             return false
//         } else {
//             return true
//         }
//     }
// }
// const lists = [1,2,3,4,5]
// console.log(everyFunc(lists))

// some:
// Has Passing Grades: Check if some grades in an array are above a passing level.
// Contains Admin Users: Verify if some user objects in an array have the role of 'admin'.
// Has Overdue Items: Confirm if some objects in a list have an overdue property set to true.
// Includes Prime Numbers: Check if some numbers in an array are prime numbers.
// Create manual function of some

// 1

// const lists = [1,2,7,4,2,9]

// const listn = lists.some(function(element){
//     return element >=9
// })

// console.log(listn)

// 2

// const lists = [{role: "admin"},{role: "user"}];

// const listn = lists.some(function(element){
//     return element.role == "admin"
// })

// console.log(listn)

// 3

// const obj1 = [{overdue: "true", role: "Citizen"}];

// const listn = obj1.some(function(element){
//     return element.overdue == "true"
// })

// console.log(listn)

// find:
// Find First Negative Number: Identify the first negative number in an array.
// Find User by ID: Return the first user object in an array with a specific ID.
// Find First Incomplete Task: Locate the first task object in an array that has complete property set to incomplete.
// Find Product by Name: Search for the first product in an array with a specific name.
// Create manual function of find

// 1

// const lists = [1,2,3,4,5,-2];

// const listn = lists.find(function(element){
//     return element < 0
// })

// console.log(listn)

// 2

// const lists = [{status: "complete"},{status: "incomplete"}]

// const listn = lists.find(function(element){
//     return element.status == "complete";
// })

// console.log(listn)

// 3

// const lists = ["apple","pear","shoe"];

// const listn = lists.find(function(element){
//     return element == "shoe"
// })
