// const { MailtrapClient } = require("mailtrap");
import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv"

dotenv.config()

export const mailtrapClient = new MailtrapClient({ endpoint: process.env.MAILTRAP_ENPOINT, token: process.env.MAILTRAP_TOKEN });

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Mailtrap Test",
};

// Looking to send emails in production? Check out our Email API/SMTP product!
// const { MailtrapClient } = require("mailtrap");
// import { MailtrapClient } from "mailtrap";

// const TOKEN = "6be1e02df4d0c0210b60544f2b7f83b9";

// export const mailtrapClient = new MailtrapClient({
//   token: TOKEN,
//   testInboxId: 2495906,
// });

// export const sender = {
//   email: "hello@example.com",
//   name: "Mailtrap Test",
// };
// const recipients = [
//   {
//     email: "kaveripunu@gmail.com",
//   }
// ];

// client.testing
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);



// import { createTransport } from "nodemailer";

// const transporter = createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   auth: {
//     user: process.env.SMTP_USERNAME,
//     pass: process.env.SMTP_PASSWORD,
//   },
// });

// // async..await is not allowed in global scope, must use a wrapper
// async function sendEmail(mailOptions) {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: mailOptions.from, // sender address
//     to: mailOptions.to, // list of receivers
//     subject: mailOptions.subject, // Subject line
//     text: mailOptions.text, // plain text body
//     html: mailOptions.html, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// }
// export default sendEmail
