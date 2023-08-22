const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');

const myArr = 
[
    "first", "two", "three", 0, 100, true, 
    {"first": "Laurence", "first1": "Laurence Svekis"},
    [0, 1, 2]
];

let val = "none";
val = myArr[0];          // = "first"
val = myArr[6]["first"]; // = "Laurence"
val = myArr[7][1];       // = 1
//console.log(val);

for(x = 0; x < myArr.length; x++) {
    //console.log(myArr[x]);
}

myArr.forEach((val, index, totalArray)=>{
    console.log(val, index, totalArray);
});

const myObj2 = {
    "people" : [
        {
            "firstName" : "Laurence",
            "lastName" : "Svekis",
            "age" : 40
        },
        {
            "firstName" : "Linda",
            "lastName" : "Vekis",
            "age" : 30
        },
        {
            "firstName" : "John",
            "lastName" : "Kis",
            "age" : 20
        }
    ]
}

myObj2["people"].forEach((val) => 
{
    console.log(val.firstName);
    output1.innerHTML += `${val.firstName} ${val.lastName} ${val.age} <br>`;
})
