const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const url = 'data9.json';

output1.addEventListener('click', getData);

// makes the "fetch" request to get data from "data9.json"
function getData() {
    fetch(url)
        .then(rep => rep.json())
        .then((data) => {
            console.log(data);
            outputData(data.arr);  // get JavaScript "array" data.
        })
}


function outputData(arr) {
    console.log(arr);
    let val = arr.indexOf('ttwo'); // returns "-1" if item does not exist in array
    if (val == -1){
        val = 'Not Found';
    }
    val = Array.isArray(arr); // check if "arr" is an array

    // another way to check if item is in array
    val = arr.find(ele => {
        return ele == "two"
    })

    // Check if array "includes" and item. Returns "true" or "false"
    val = arr.includes("two");

    // "map" creates a new array applying desired conditions
    const newArr2 = arr.map((ele, index) => {
        /*
        if ( ele.length > 3 ) {
            return ele;
        }
        */
       return `${index} ${ele}`;
    });
    console.log(newArr2);

    // sort in place
    arr.sort();
    console.log(arr);

    // reverse sort in place
    arr.reverse();
    console.log(arr);
    
    output2.textContent = val;
    console.log(val);
}