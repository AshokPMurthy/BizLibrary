
const myObj = {
    message: "Hello",
    greet: "welcome",
    who: "world"
};

const myObj2 = '{message: "Hello", greet: "welcome", who: "world" }';

const str = JSON.stringify(myObj);

const myObj3 = JSON.parse(str);

console.log(myObj3);
