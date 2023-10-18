// const express = require('express');
// const app = express(); // instance of an app
// const { add, subtract, multiply, divide } = require('./calculator');
// const fs = require('fs');
// const port = 13000;
// create our  first route 
// home route
// app.get('/', (req, res) => {
// there are many tasks that may or may not need 
// to happen before you respond with data 
// ----------
// Scenario 1
// You need to iterate through an array of data and return
// some modified data as a response
// ----------
// Scenario 2
// You need to hit an API, get back data, parse data,
// and send data as a response
// ----------
// Scenario 3
// You receive some data frmom the user while they are
// making a request, you will need to parse the incoming data, store the data in your database. Finally, you will
// need to respond to the user (via a re-direct to another route)
// ----------
//     return res.json({ message: 'Welcome to my Node App 2.0' })
// });



// app.get('/michael', (req, res) => {
//     return res.json({ message: 'michael' });
// });

// app.get('/kobe', (req, res) => {
//     return res.json({ message: 'kobe' });
// });

// // using local modules + req.params
// // test using the core module (fs)
// fs.readFile('description.txt', 'utf8', (error, data) => {
//     if (error) {
//         console.log('----- error ----', error);
//     } else {
//         console.log(data);
//     }
// })

// using core modules and req.query
// --------------------------------------
// Example: localhost:13000/read?something=story
// Response { "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugit amet minima illo laborum nam alias. Incidunt omnis eos eligendi a, ullam nihil doloremque illo, reprehenderit laudantium, corrupti delectus illum?" }
// --------------------------------------
// what is req.query? an object
// { something: 'story' }
// --------------------------------------
// app.get('/read', (req, res) => {
//     // grab the query string,
//     // pass the querystring into the fs function
//     // return the data that comes from the txt file
//     let element = req.query.something; // story
//     fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
//         if (error) {
//             return res.json({ message: 'There is an issue, try again later...' });
//         } else {
//             console.log(data)
//             return res.json({ message: data });
//         }
//     });
// });

// Set up a PORT number, and listen for server 
// const PORT = process.env.PORT || 13000;

// app.listen(PORT, () => {
//     console.log('Server is running on PORT ', PORT);
// })

const express = require('express');
const app = express();
const PORT = process.env.PORT || 13000;


app.get('/', (req, res) => {
    // return res.json({ message: 'Welcome to my Node App 2.0' })
    const link = 'https://www.youtube.com/watch?v=IVdJ6Z9jluc';
    const jsonResponse = {
        link: link,
    };
    res.json(jsonResponse);
});

fetch('/')
    .then(response => response.json())
    .then(data => {
        // Access the link from the JSON response
        let link = data.link;

        // Do something with the link, for example, update an <a> element's href attribute
        let linkElement = document.getElementById('#mj');
        linkElement.href = link;
    })
    .catch(error => {
        // Handle errors if the request fails
        console.error('Error:', error);
    });

app.listen(PORT, () => {
    console.log('Server is running on PORT ', PORT);
})