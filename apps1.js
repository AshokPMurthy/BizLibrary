const btn = document.querySelector('.btn');
const url = 'https://www.discoveryvip.com/shared/test1.json';
const output = document.querySelector('.output');
const localUrl = 'data20.json'; // local copy of the JSON from the "url" above

btn.addEventListener('click', getData);

// event listener when "btn" is clicked.
function getData(e) {
    //console.log(e);
    fetch(localUrl).then(rep => rep.json() )
        .then((data) => {
            outputData(data);
        })
}

function outputData(data) {
    let html = "";
    data.forEach((d) => {
        console.log(d);
        html += `<p>`;
        html += `<div>${d.name.first} ${d.name.last}</div>`;
        html += `<small>${d.location.city} ${d.location.country}</small>`;
        html += `<div>${d.age}</div>`;
        html += `</p>`;
    });
    output.innerHTML = html;
}