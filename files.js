const fs = require('fs'); //filesystem module

// reading files

fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err); 
    }
    console.log(data.toString()); 
}); 

// writing files

fs.writeFile('./docs/blog2.txt', "Hello, world!", () => {
    console.log("File was written");
})

fs.writeFile('./docs/deleteme.txt', "Remove me", () => {
    console.log('File was written...'); 
})


// directories

if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err);
        } 
        console.log('folder created')
})
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err); 
        }
        console.log('folder deleted'); 
    })
}


// deleting files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('file deleted'); 
    })
}