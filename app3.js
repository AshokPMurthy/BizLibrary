
const myObj = {
    "friends": [
        {"first" : "Laurence"},
        {"first" : "Mike"},
        {"first" : "John"}
    ],
    "myName" : "Laurence",
    "total" : 100,
    "status" : false
}

const myObj1 = {
    "first" : "Laurence r",
    "last" : "Svekis"
}

const myObj2 = {
    "first name" : "Laurence r",
    "lastName" : "Svekis"
}

const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');

output1.textContent = myObj1["first"] + " " + myObj1["last"];
output2.textContent = myObj1.first + " " + myObj1.last;

console.log(myObj2["first name"]);
console.log(myObj2.lastName);

const val = "first name";

console.log(myObj2[val]);
console.log(myObj2.val);

output1.textContent = myObj["friends"][2]["first"];

