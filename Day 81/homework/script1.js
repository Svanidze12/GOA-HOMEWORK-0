// თქვენ გადმოგეცემათ სახელების სია. დავალებაა, რომ დააბრუნოთ ახალი სია, სადაც ყველა სიტყვა იქნება capitalize ვარიანტში, გამოიყენეთ map.

function Capitalize(element){
    return element[0].toUpperCase() + element.slice(1)
}

const wordArr = ["atuka","data","gela","shalva"]

const mapArray = wordArr.map(Capitalize);

console.log(mapArray)
