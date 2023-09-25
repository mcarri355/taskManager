const express = require('express');
const app = express();
let { people } = require('./data');

// static assests
app.use(express.static('./public'));

/*
parse form data 
built in middleware finction in ecpress that parses incoming requests
If you check req.body without it then you willsee that the value is undefined.
*/
app.use(express.urlencoded({ extended: false }));

// parse form data this work similarly to the url encoded but handles the json.
app.use(express.json());

app.get('/api/people', (req, res) => {
  res.json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
  console.log(req.body);
  const name = req.body;
  //if the new person has a name
  if (name) {
    return res.status(201).json({ success: true, person: name });
  }
  res.status(404).json({ success: false, msg: 'Please provide a name' });
});

// Above is for javascript.html and below is for index.html

app.post('/login', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).json({ success: true, person: name });
  }
  res.send('Please provide credentials');
});

/*Part 1: Above
The above part brings in the public folder from before and then handles
the indexand javascript verisons. I placed the JS for the form in a seperate js file in the public folder so we can see that load alongside the html, the api/people can be tested by going to the URL, but the use is in the script.js where we call the data with async await.

The get for the api/people is for out testing but then the post will be for the request from the script.js*/

// Testing Postman:
app.post('/api/postman/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ data: [], success: false, msg: 'Please enter a name.' });
  }

  res.status(201).json({
    success: true,
    data: [...people, { id: people.length + 1, name }],
  });
});

// PUT Request
app.put('/api/postman/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return express.json({ success: false, data: [] });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(202).json({ data: newPeople, success: true });
});

app.listen(5000, () => {
  console.log('listening on 5000');
});

// Delete Request
app.delete('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, data: [], msg: 'No matching ID found' });
  }

  people = people.filter((person) => {
    return person.id !== Number(id);
  });
  res.status(200).json({ data: people, success: true });
});
