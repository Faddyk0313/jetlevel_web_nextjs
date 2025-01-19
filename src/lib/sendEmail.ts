import nodeMailer from 'nodemailer';

let transporter = nodeMailer.createTransport({
  service: process.env.NODE_ENV === 'development' ? "gmail":'hotmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export const sendEmail = (mailOptions:any) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        return resolve(info);
      }
    });
  });
};


