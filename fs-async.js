const { readFile, writeFile } = require('fs');

// callback hell

readFile('./content/first.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    const first = data;
    readFile('./content/second.txt', 'utf-8', (err, data) => {
        if(err) {
            console.log(err);
        }
        const second = data; 
        writeFile('./content/result-async.txt', 
        `Here is the result: ${first}, ${second}`,
        (err, data) => {
            if(err) {
                console.log(err);
            }
            console.log(data);
        })
    })
});