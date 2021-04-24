import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${req.body.firstName} ${req.body.lastName} < ${req.body.email} >`,
    to: 'zayen01@gmail.com',
    subject: `Demande de ${req.body.firstName} ${req.body.lastName}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).send({ error: err });
    }

    res.send({ message: info.response });
  });
}
