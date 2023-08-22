//console.dir(document);
//console.dir(window);   // "window" object is parent of the "document" object

const output1 = document.querySelector('div');
const output2 = document.querySelectorAll('div');
const output3 = document.querySelector('.output3');

output2.forEach((ele) => {
    console.log(ele);
    ele.textContent += "Click";
    ele.addEventListener('click', (e) => {
        //ele.style.backgroundColor = 'red'; // "style" overrides "class"
        ele.classList.toggle('btn');
        if (ele.classList.contains('output1')) {
            console.log('output1');
            getData('data9.json');
        }
        if (ele.classList.contains('output2')) {
            console.log('output2');
            getData('data6.json');
        }
    })

    ele.addEventListener('mouseover', (e) => {
        ele.style.backgroundColor = 'red';
    })

    ele.addEventListener('mouseout', (e) => {
        ele.style.backgroundColor = 'white';
    })

})

function getData(url) {
    fetch(url)
        .then(rep => rep.json())
        .then((data) => {
            outputData(data);
        })
}

function outputData(data) {
    output3.textContent = JSON.stringify(data);
}

console.log(output1);
console.log(output2);

// fire an event when all the DOM content has loaded
document.addEventListener('DOMContentLoaded', (e) => {
    console.log('ready now');
} )