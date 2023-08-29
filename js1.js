const btn = document.querySelector('#btn');
// console.log(btn);
const output = document.querySelector('.container');
const url = 'temp1.json';

// click event handler of the button
btn.onclick = () => {
    //console.log('clicked');
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            addData(data);
        })
}

// called by : btn.onclick()
function addData(data) {
    let html = '<h3>Results</h3>';
    data.forEach(person => {
        console.log(person);
        html += `<div>${person.first} ${person.last} (${person.id})</div>`;
    })
    output.innerHTML = html;
}