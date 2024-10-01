// თქვენ გადმოგეცემათ სახელების სია. დავალებაა, რომ დააბრუნოთ ახალი სია, სადაც გექნებათ მარტო ის სახელები, რომლებიც იწყებიან დიდი ასოთი და მათი სიგრძე არ აღემატება 5-ს.

function upperName(element) {
    return element[0] === element[0].toUpperCase() && element.length === 5;
}

const arr = ["atuka", "Data", "gela", "Shota"];

const filtered = arr.filter(upperName);

console.log(filtered)
