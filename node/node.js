const fs = require('node:fs');

console.log("=== STARTING NODE.JS SCRIPT ===");

// Create and write to a file
fs.writeFile('example1.txt', 'Hello, World!', function (err){
    if (err) console.error("WRITE ERROR:", err);
    else {
        console.log("✅ Step 1: File written successfully");
        console.log("Content: 'Hello, World!'");
    }
})

// Append text to the file
fs.appendFile('example1.txt', 'Hello, World! again 1223 ', function (err){
    if (err) console.error("APPEND ERROR:", err);
    else {
        console.log("✅ Step 2: Text appended successfully");
        console.log("Added: 'Hello, World! again 1223 '");
        console.log("=== ALL OPERATIONS COMPLETE ===");
    }
})


// Rename the file
fs.rename("example1.txt","new.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})


// Copy the renamed file
fs.copyFile("new.txt","copy.txt ", function(err){
    if(err) console.error(err);
    else console.log("copied");
})


// Delete the copied file
fs.unlink("copy.txt", function(err){
    if(err) console.error(err);
    else console.log("deleted");
})

// there are a lot of other file system operations available in Node.js fs module. ths are just a few to practice with.