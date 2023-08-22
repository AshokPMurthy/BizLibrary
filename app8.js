const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const url = 'data8.json';

output1.addEventListener('click', getData);

// makes the "fetch" request to get data from "data8.json"
function getData() {
    fetch(url)
        .then(rep => rep.json())
        .then((data) => {
            console.log(data);
            getInfo(data);
        })
}

function getInfo(data) {
    for (const prop in data.person) {
        console.log(prop);
    }

    const keys = Object.keys(data.person);
    console.log(keys);
    keys.forEach((key) => {
        console.log(data.person[key])
    })

    const vals = Object.values(data.person);
    console.log(vals);
    
    const entries = Object.entries(data.person);
    console.log(entries);
    
    for (const arr of entries) {
        console.log(arr[0]);
        console.log(arr[1]);
    }

    data.person["test"] = "New Value";
    console.log(data);
}