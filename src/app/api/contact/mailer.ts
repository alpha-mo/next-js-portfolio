import nodemailer from 'nodemailer'

export type Msg = {
    person: string
    personMail: string
    personMsg: string
}

export async function sendMail(msg: Msg) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtppro.zoho.eu",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "contact@ojail.se",
            pass: process.env.PASS,
        },
    });

    let output: boolean = false

    // send mail with defined transport object
    const result = await transporter
        .sendMail({
            from: {
                name: "M. Ojail",
                address: "contact@ojail.se",
            }, // sender address
            to: msg.personMail,
            subject: "Confirmation ✔", // Subject line
            text: `Hi ${msg.person}!\nI have recieved your message.\nYou'll be hearing from me soon.`, // plain text body
            //html: "<b>Hello world?</b>", // html body
        })

    output = result.response.split(' ', 1)[0] === '250'

    await transporter
        .sendMail({
            from: {
                name: "Portfolio Contact Form",
                address: "contact@ojail.se",
            }, // sender address
            to: "contact@ojail.se",
            subject: "New Message!", // Subject line
            text: `From: ${msg.person}\ne-mail: ${msg.personMail}\nMessage:\n${msg.personMsg}`, // plain text body
            //html: "<b>Hello world?</b>", // html body
        })

    return { success: output }
}