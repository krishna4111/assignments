## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

// solution
const fs = require("fs");

function read() {
fs.readFile("a.txt", "utf-8", (err, data) => {
if (err) {
console.log(err);
return;
}
const val = data.trim();
const arr = val.split(" ");
let ans = "";
for (let i = 0; i < arr.length; i++) {
if (arr[i] === "") {
continue;
} else {
ans += arr[i] + " ";
}
}
console.log("ans>>>", ans.trim());
});
}
// function write(str) {
// fs.appendFile("a.txt", str, (err) => {
// if (err) {
// console.log(err);
// } else {
// console.log("write on a file successfully");
// }
// });
// }

read();
