document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    // Simple validation (can be expanded as needed)
    if (name && email) {
        submitForm(name, email, subject, message);
    } else {
        document.getElementById('formOutput').innerText = 'Name and email are required.';
    }
});

function submitForm(name, email, subject, message) {
    fetch('/send_email', { // Your server-side endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('formOutput').innerText = data;
    })
    .catch((error) => {
        document.getElementById('formOutput').innerText = 'Error: ' + error;
    });
}

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

app.post('/send_email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Create a transporter for nodemailer
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Replace with your SMTP host
        port: 587, // Common port for SMTP
        secure: false, // True for 465, false for other ports
        auth: {
            user: 'thetej1234@gmail.com', // Replace with your email
            pass: 'aW2!9876' // Replace with your email password
        }
    });

    // Setting up email data
    const mailOptions = {
        from: email, // Sender address
        to: 'thetej1234@gmail.com', // List of recipients
        subject: `New Contact Form Submission from ${name}: ${subject}`, // Subject line
        text: `You have received a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}` // Plain text body
    };

    // Sending the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));