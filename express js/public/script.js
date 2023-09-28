const result = document.querySelector('.result');
var editMode = false;

const fetchPeople = async () => {
  try {
    const { data } = await axios.get('/api/people');
    console.log(data);
    const people = data.data.map((person) => {
      return `<h5 id = '${person.id}' class = 'e5'>${person.name}
      <br>
      <small>ID: ${person.id}</small>
      <br>
      <small>Desc: ${person.desc}</small>
      <br>
      <button onclick="nameEdit('${person.id}', '${person.name}', '${person.desc}')">Edit</button> 
      <button onclick="deletePeople(${person.id})">Delete</button>
      <input type='checkbox' onclick="checkbox(${person.id})" class='check'></h5>`;
    });

    result.innerHTML = people.join('');
  } catch (error) {
    formAlert.textContent = error.response.data.msg;
  }
};
fetchPeople();

// HTML
const btn = document.querySelector('.submit-btn');
const input = document.querySelector('.form-input');
const formAlert = document.querySelector('.form-alert');
const desc = document.querySelector('#desc');

btn.addEventListener('click', async (e) => {
  e.preventDefault();
  const nameValue = input.value;
  const descValue = desc.value;

  try {
    // Check to see if someone is editing
    if (editMode == false) {
      const { data } = await axios.post('/api/people', {
        name: nameValue,
        desc: descValue,
      });
      const h5 = document.createElement('h5');
      result.appendChild(h5);
      h5.textContent = data.person;
    } else {
      const newName = input.value;
      const newDesc = desc.value;
      fetch(`/api/people/${currentID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName, desc: newDesc }),
      });
      fetchPeople();
      editMode = false;
    }
    fetchPeople();
  } catch (error) {
    console.log(error.response);
    formAlert.textContent = error.response.data.msg;
  }
  input.value = '';
});

// Delete Function
function deletePeople(id) {
  fetch(`/api/people/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  fetchPeople();
}

var currentID = '';

// Edit Function
function nameEdit(pId, pName, pDesc) {
  editMode = true;
  input.value = pName;
  desc.value = pDesc;
  currentID = pId;
}

let count = true;
// Checkbox
function checkbox(id) {
  var test = document.querySelectorAll('.e5');
  for (let i = 0; i < test.length; i++) {
    if (test[i].getAttribute('id') == id) {
      var ele = test[i];
      var checkbox = ele.querySelector('.check'); // Get the checkbox element inside the h5
      if (checkbox.checked) {
        ele.style.textDecoration = 'line-through';
        ele.style.backgroundColor = 'gray';
      } else {
        ele.style.textDecoration = 'none';
        ele.style.backgroundColor = '';
      }
    }
  }
}
