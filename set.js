//setTimeout
//setTimeout(function, milliseconds);

//1. Display a Text  Once After 3 Second
function greet(){
    console.log("Hello world");
}
setTimeout(greet, 3000);

//if we change the millisecond value then 

function greet1(){
    console.log("Hello World 2");
}
setTimeout(greet1, 5000);

//2. Display Time every 5 second
function showTime() {
let dateTime= new Date();
let time = dateTime.toLocaleTimeString();
console.log(time)
setTimeout(showTime, 1000);
}

showTime();

//3. Use clearTimeout() Method
let count = 0;
function increaseCount(){
    count += 1;
    console.log(count)
}
let id = setTimeout(increaseCount, 3000);

clearTimeout(id);
console.log('setTimeout is stopped.');

//4. Additional arguments to the setTimeout() method
function greet(name, lastName) {
    console.log('Hello' + ' ' + name + ' ' + lastName);
}
setTimeout(greet, 1000, 'Git', 'Lover');