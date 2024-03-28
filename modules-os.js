const os = require('os');

// get information about the current user
const user = os.userInfo(); 
console.log(user);

// method return the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);
console.log(`The System Uptime is ${(os.uptime() / 60).toFixed(0)} minutes`);
console.log(`The System Uptime is ${(os.uptime() / 60 / 60).toFixed(0)} hours`);
console.log(`The System Uptime is ${(os.uptime() / 60 / 60 / 24).toFixed(0)} days`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(), 
}

console.log(currentOS);