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
const app = express();

app.use(express.json()); // To parse JSON bodies

app.post('/send_email', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Here, you'd add your logic to send an email
    console.log(name, email, subject, message);

    // Sending a response back to the client
    res.send('Email sent successfully (or a mock message for testing).');
});

app.listen(3000, () => console.log('Server is running on port 3000'));