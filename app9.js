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

// Works with JavaScript "array" data.
function outputData(arr) {
    console.log(arr);
    const removedVal = arr.pop();
    console.log("Last element removed : " + removedVal);
    lenArr = arr.push("Four"); // "push" returns length of the array
    //console.log(lenArr);

    // remove 1st element of array, and shift all others over
    const removeFirst = arr.shift();
    console.log("First element removed : " + removeFirst);
    console.log(arr);

    // add to beginning of array
    const lenNewArr = arr.unshift("Five"); // "unshift" returns length of the array
    console.log("Length of arr after 'unshift' : " + lenNewArr);

    console.log(arr);
    arr[1] = "Updated";

    // add new items to an array.
    console.log("'arr' before splice : " + arr);
    arr.splice(1,0,"Six", "Seven", "Eight"); // add item at index "1", remove "0" elements
    console.log("'arr' after splice : " + arr);
    arr.splice(0,1); // remove "1" element at position 0

    const newArr = arr.slice(1); // create a new array by slicing at index #1
    console.log(newArr);

    let myStr = arr.toString(); // convert array to string
    console.log("convert array to string : " + myStr);
    myStr = arr.join(' -*- '); // use ' -*- ' as separator instead of ","
    console.log(myStr);

    output2.textContent = myStr;
}
