const { publish } = require('./observer');

let counter = 0;
setInterval(() => {
    console.log('Publisher sends ', counter)
    publish('message', counter);
    counter++;
}, 2000)