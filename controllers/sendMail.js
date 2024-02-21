const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: 'mzain42401@gmail.com',
            pass: '25672855'
        },
    });

    const info = await transporter.sendMail({

        from: '"zain ali" <mzain42401@gmail.com>', // sender address
        to: "mzainali1199@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
    console.log("message id ", info.messageId);

    res.json(info)
    try {
        await transporter.sendMail()
    } catch (error) {
        console.log(error);
    }


}

module.exports = sendMail
