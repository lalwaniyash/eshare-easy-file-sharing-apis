const nodemailer = require('nodemailer');
 async function sendMail ({ from, to, subject, text, html}) {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        requiresAuth: true,
        domains: ["gmail.com", "googlemail.com"],
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
            
        }
    });

    let info = await transporter.sendMail({
                from: `eshare <${from}>`,
                to,
                subject,
                text,
                html 
    });
}

module.exports = sendMail;