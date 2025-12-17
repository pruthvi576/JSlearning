// timeout function
let time1 = setTimeout(function () {
    console.log("HELLOW");
}, 8000);    

// interval function
let inter = setInterval(function () {
    console.log("HELLOW");
}, 8000);

// clear timeout and clear interval
clearTimeout(time1);
clearInterval(inter);