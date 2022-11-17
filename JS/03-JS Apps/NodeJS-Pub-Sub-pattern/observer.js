const subscribers = {};

function subscribe(type, callback) {
    console.log('Observer says: new subscriber for ' + type + '(data type)');
    if (subscribers[type] == undefined) {
        subscribers[type] = [];
    }

    subscribers[type].push(callback);
}

function publish(type, data) {
    console.log('Publisher says: I give you ' + type + ' ' + data);
    const currentSubscribers = subscribers[type];

    if (currentSubscribers) {
        for (let subscriber of currentSubscribers) {
            subscriber(data);
        }
    }
}

setTimeout(() => {
    console.log('Observer registers subscribers: ', subscribers)
}, 1000);

module.exports = {
    subscribe,
    publish
}