const result = document.querySelector('.result');
const fetchPeople = async () => {
  try {
    const { data } = await axios.get('/api/people');
    console.log(data);
    const people = data.data.map((person) => {
      return `<h5>${person.name}<br><button onclick='del()'>delete</button><br><button class = 'edit'>edit</button></h5>
      `;
    });
    result.innerHTML = people.join('');
  } catch (error) {
    formAlert.textContent = error.response.data.msg;
  }
};
fetchPeople();

// HTML Submit Form
const btn = document.querySelector('.submit-btn');
const input = document.querySelector('.form-input');
const formAlert = document.querySelector('.form-alert');

btn.addEventListener('click', async (e) => {
  e.preventDefault();
  const nameValue = input.value;
  try {
    const { data } = await axios.post('api/people', { name: nameValue });
    const h5 = document.createElement('h5');
    h5.textContent = data.person;
    result.appendChild(h5);
    fetchPeople();
  } catch (error) {
    formAlert.textContent = error.response.data.msg;
  }
  input.value = '';
});

// Delete
function del() {
  try {
    axios.delete('api/people');
  } catch (error) {
    console.log(error);
  }
}
