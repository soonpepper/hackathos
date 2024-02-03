from flask import Flask, request
import smtplib

app = Flask(__name__)

@app.route('/submit_contact_form', methods=['POST'])
def send_email():
    name = request.form['name']
    email = request.form['email']
    subject = request.form['subject']
    message = request.form['message']

    # Create the email content
    email_content = f"From: {name}\nEmail: {email}\nSubject: {subject}\nMessage: {message}"

    # Set your email server details
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587
    smtp_username = 'thetej1234@gmail.com'
    smtp_password = 'aW2!9876'
    from_email = email
    to_email = 'thetej1234@gmail.com'

    # Send the email
    try:
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.sendmail(from_email, to_email, email_content)
        return "Email sent successfully"
    except Exception as e:
        return f"An error occurred: {e}"

if __name__ == '__main__':
    app.run(debug=True)