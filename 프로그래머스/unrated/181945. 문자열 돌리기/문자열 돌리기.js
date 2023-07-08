const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    length = str.length
    
    for (i=0; i<length; i++) {
        console.log(str.substring(i,i+1));
    }
});