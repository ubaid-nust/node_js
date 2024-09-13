const os = require('os');

// Info about currect user
const user = os.userInfo();

console.log(user);

// method returns the system uptime in seconds

console.log(os.uptime());

// Operating system information

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(`Current OS info ${JSON.stringify(currentOs,null,2)}`);