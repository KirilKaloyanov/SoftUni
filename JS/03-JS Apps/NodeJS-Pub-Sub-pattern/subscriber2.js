const { subscribe } = require('./observer');

let runningTotal = 0;
subscribe('message', (data) => {
    runningTotal += data;
    console.log('Subscriber 2 says: Running total ' + runningTotal);
})