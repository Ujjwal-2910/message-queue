const { Worker } = require('bullmq');

const sendEmail = (ms) => {}

const worker = new Worker('email-queue', async (job) => {
    console.log(`Message red id: ${job.id}`);
    console.log("Processing message");
    console.log(`Sending email to ${job.data.email}`);
    await sendEmail(5);
    console.log("Email sent");
});