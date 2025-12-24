const fs = require('node:fs');

console.log("=== STARTING NODE.JS SCRIPT ===");

fs.writeFile('example1.txt', 'Hello, World!', function (err){
    if (err) console.error("WRITE ERROR:", err);
    else {
        console.log("✅ Step 1: File written successfully");
        console.log("Content: 'Hello, World!'");
    }
})


fs.appendFile('example1.txt', 'Hello, World! again 1223 ', function (err){
    if (err) console.error("APPEND ERROR:", err);
    else {
        console.log("✅ Step 2: Text appended successfully");
        console.log("Added: 'Hello, World! again 1223 '");
        console.log("=== ALL OPERATIONS COMPLETE ===");
    }
})

fs.rename("example1.txt","new.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})

fs.copyFile("new.txt","copy.txt ", function(err){
    if(err) console.error(err);
    else console.log("copied");
})

