const output = document.querySelector('.output');

const obj = [
    {"first":"Laurence", "last":"Svekis"},
    {"first":"John", "last":"Svekis"},
    {"first":"Laurence", "last":"Smith"}
];

console.log(obj);

obj.forEach((item) => {
    console.log(item);
    output.innerHTML += `<div>${item.first} ${item.last}</div>`;
})

// Display the JSON object as a string
const str1 = JSON.stringify(obj);
output.innerHTML = str1;
console.log(str1);

// Convert the JSON formatted string back to a JSON object
const obj1 = JSON.parse(str1);
console.log(obj1);
