const { subscribe } = require('./observer');

subscribe('message', function subscription (data) {
    console.log('Subscriber1 says: received ', data);
})