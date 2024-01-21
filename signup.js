//Function to read the form
const form = document.addEventListener('submit', (event) => {
    event.preventDefault();
    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('re-type').value;
    var addresss = document.getElementById('address').value;

    console.log(firstname)
    console.log(lastname)
    console.log(email)
    console.log(password)
    console.log(addresss)
    console.log(repassword)

    validateForm(password, repassword)



})

function validateForm(password,repassword) {
    if (password != repassword) {
        alert("Passwords do not match");
        return false;
        
    }

    const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('backend final.db');

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', async (req, res) => {
  const { firstname, lastname,password, repassword, email, addresss } = req.body;

  // Hash and salt the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user data into the database
  db.run(
    'INSERT INTO users (firstname,lastname,address,repassword, email, password) VALUES (?, ?, ?,?,? ,?)',
    [username, email, hashedPassword],
    (err) => {
      if (err) {
        return res.status(500).send('Error inserting user into database');
      }

      res.status(201).send('User registered successfully');
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



    
}


