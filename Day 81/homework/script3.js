// თქვენ გადმოგეცემათ მთელი რიცხვების სია. დავალებაა, რომ დააბრუნოთ ახალი სია, სადაც იქნება მარტო 20-ზე მეტი 5-ის ჯერადები.

function sort(element){
    return element > 20 && element % 5 === 0
}

const arr = [22,25,5,10,15,30,35];

const filtered = arr.filter(sort);

console.log(filtered)
