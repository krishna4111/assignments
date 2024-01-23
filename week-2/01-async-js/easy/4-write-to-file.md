## Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

//code
const fs = require("fs");

function read() {
fs.readFile("a.txt", "utf-8", (err, data) => {
if (err) {
console.log(err);
return;
}
console.log("read>>>", data);
});
}
function write(str) {
fs.appendFile("a.txt", str, (err) => {
if (err) {
console.log(err);
} else {
console.log("write on a file successfully");
}
});
}

read();
write("did my code is appending ");
read();

// fs.eritefile -> it always replace all the texts from the file .
//fs.appendFile -> it appends the txt to the older one.
