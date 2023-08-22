const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const url = 'data6.json';

output1.textContent = "Click Me";
output1.style.border = "1px solid black";
output1.style.textAlign = "center";

output1.addEventListener("click", getData)

// makes the "fetch" request to "data6.json"
function getData() {
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Not Connected');
            }
        })
        .then(data => {
            //console.log(data);
            outputData(data);
        })
        .catch((error) => {
            console.log(error);
        })
}//end- getData()


function outputData(data) {
    output2.innerHTML = '';
    console.log(data);
    data.people.forEach((person) => {
        const div = document.createElement('div');
        div.textContent = person.first;
        output2.append(div);
    })
}
