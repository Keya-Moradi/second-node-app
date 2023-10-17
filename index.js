const express = require('express');
const app = express(); // instance of an app
const { add, subtract, multiply, divide } = require('./calculator');
const fs = require('fs');

// create our  first route 
// home route
app.get('/', (req, res) => {
    // there are many tasks that may or may not need 
    // to happen before you respond with data 

    // ----------
    // Scenario 1
    // You need to iterate through an array of data and return
    // some modified data as a response
    // ----------

    // ----------
    // Scenario 2
    // You need to hit an API, get back data, parse data,
    // and send data as a response
    // ----------

    // ----------
    // Scenario 
    // You receive some data frmom the user while they are
    // making a request, you will need to parse the incoming data, store the data in your database. Finally, you will
    // need to respond to the user (via a re-direct to another route)
    // ----------



    return res.json({ message: 'Welcome to my Node App' })
});

app.get('/apples', (req, res) => {
    return res.json({ message: 'apples' });
});

app.get('/bananas', (req, res) => {
    return res.json({ message: 'bananas' });
});

// using local modules + req.params

// --------------------------------------
// Example: localhost:8000/add/7/8
// Response { "answer": 15 }
// --------------------------------------
// what is req.params? an object
// { num1: '7', num2: '8' }
// --------------------------------------
// app.get('/add/:num1/:num2', (req, res) => {
//     let num1 = Number(req.params.num1); // number
//     let num2 = Number(req.params.num2); // number
//     let answer = add(num1, num2);
//     return res.json({ answer: answer });
// });

// app.get('/subtract/:num1/:num2', (req, res) => {
//     let num1 = Number(req.params.num1); // number
//     let num2 = Number(req.params.num2); // number
//     let answer = subtract(num1, num2);
//     return res.json({ answer: answer });
// });

// app.get('/multiply/:num1/:num2', (req, res) => {
//     let num1 = Number(req.params.num1); // number
//     let num2 = Number(req.params.num2); // number
//     let answer = multiply(num1, num2);
//     return res.json({ answer: answer });
// });

// app.get('/divide/:num1/:num2', (req, res) => {
//     let num1 = Number(req.params.num1); // number
//     let num2 = Number(req.params.num2); // number
//     let answer = divide(num1, num2);
//     return res.json({ answer: answer });
// });

// test using the core module (fs)
fs.readFile('description.txt', 'utf8', (error, data) => {
    if (error) {
        console.log('----- error ----', error);
    } else {
        console.log(data);
    }
})

// using core modules and req.query
// --------------------------------------
// Example: localhost:8000/read?something=story
// Response { "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugit amet minima illo laborum nam alias. Incidunt omnis eos eligendi a, ullam nihil doloremque illo, reprehenderit laudantium, corrupti delectus illum?" }
// --------------------------------------
// what is req.query? an object
// { something: 'story' }
// --------------------------------------
app.get('/read', (req, res) => {
    // grab the query string,
    // pass the querystring into the fs function
    // return the data that comes from the txt file
    let element = req.query.something; // story
    fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'There is an issue, try again later...' });
        } else {
            console.log(data)
            return res.json({ message: data });
        }
    });
});



// Set up a PORT number, and listen for server 
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Server is running on PORT ', PORT);
})