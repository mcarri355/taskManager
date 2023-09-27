let { people } = require('../data');

// Get function for all people
const readPeople = (req, res) => {
  res.json({ success: true, data: people });
};

// Post function for creating people
let length = people.length + 1;
const createPeople = (req, res) => {
  const { name, desc, id } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ data: [], success: false, msg: 'Please enter a task' });
  }
  let person = { id: length++, name: name, desc: desc };
  people.push(person);
  res.status(200).json({ success: true, data: [people] });
};

// PUT function for update people
const updatePeople = (req, res) => {
  const { id } = req.params;
  const { name, desc } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.json({ success: false, data: [] });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
      person.desc = desc;
    }
    return person;
  });
  res.status(202).json({ data: newPeople, success: true });
};

// Delete Function for delte people
const deletePerson = (req, res) => {
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
};

module.exports = { createPeople, readPeople, updatePeople, deletePerson };
