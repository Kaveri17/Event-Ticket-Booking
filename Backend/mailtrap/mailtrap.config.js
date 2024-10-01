import { MailtrapClient } from "mailtrap";


const TOKEN = "6be1e02df4d0c0210b60544f2b7f83b9";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
  testInboxId: 2495906,
});

export const sender = {
  email: "hello@example.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "kaveripunu@gmail.com",
  }
];