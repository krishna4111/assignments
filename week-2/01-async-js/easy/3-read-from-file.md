## Reading the contents of a file

Write code to read contents of a file and print it to the console.
You can use the fs library to as a black box, the goal is to understand async tasks.
Try to do an expensive operation below the file read and see how it affects the output.
Make the expensive operation more and more expensive and see how it affects the output.

//code

const fs = require("fs");

function read() {
fs.readFile("a.txt", "utf-8", (err, data) => {
if (err) {
console.log(err);
return;
}
console.log(data);
});
}
function expensiveOperation() {
let sum = 0;
for (let i = 0; i <= 10000000000000; i++) {
sum += i;
}
console.log(sum);
}

//fs method call (it is async)
read();
//expensive operation call it is sync.
expensiveOperation();

//in here even though in here our fs function is completed its work it dosent return the value , bcz our js is highly concentration on the sync operation onece the sync operation is doned then only it will gives us the value of async function.

//sync functions are executed first then only the async functions are takes place.
