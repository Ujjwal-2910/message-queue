const { Queue } = require('bullmq');

const notificationQueue = new Queue('email-queue', {
    connection: {
        host: '127.0.0.1',
        port: 6379,
    }
});

async function init() {
    const res = await notificationQueue.add('email to Ujjwal', {
        email: 'ujjwalagrawal29102001@gmail.com',
        subject: 'Welcome Message',
        body: 'Hey Ujjwal, Welcome',
    });
    console.log("Added to queue", res.id);
}

init();