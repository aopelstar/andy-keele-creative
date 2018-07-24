const express = require('express')
    , bodyParser = require('body-parser')
    , nodemailer = require('nodemailer')
    , cors = require('cors');
require('dotenv').config();

const app = express();
app.use( bodyParser.json() );

app.use( express.static( `${__dirname}/../build` ) );

// cloudinary enpoint

app.post('/api/sendEmail', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: "login",
                user: process.env.MY_EMAIL,
                pass: process.env.MY_LOCK
            }
        });
        

        let mailOptions = {
            from: `${req.body.name} <${req.body.email}>`, 
            to: process.env.MY_EMAIL,
            subject: "website email", 
            html:`<div><p> 
            This is an automated Email from your website.  Someone is trying to connect with you: <br/>
            <br/>Name: ${req.body.name}<br/>
            <br/>Email: ${req.body.email}<br/>
            <br/>Telephone: ${req.body.phone}<br/>
            <br/>Message: ${req.body.message}</p></div>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            res.send('done')
        });
    });
})

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`keeping it hot on port ${port}`)
})