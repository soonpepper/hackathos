from flask import Flask, request, render_template
import sqlite3

app = Flask(__name__)

@app.route('/')
def form():
    return render_template('form.html')

@app.route('/submit', methods=['POST'])
def submit_form():
    name = request.form['name']
    email = request.form['email']
    subject = request.form['subject']
    message = request.form['message']


    # Add more fields as necessary

    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?)", (name, email, subject, message))
    conn.commit()
    conn.close()

    return "Form submitted"

def init_db():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS contacts (name TEXT, email TEXT, subject TEXT, message TEXT)''')
    conn.commit()
    conn.close()