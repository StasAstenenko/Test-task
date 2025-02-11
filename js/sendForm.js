import axios from '/node_modules/axios';

const url = 'https://example.com/register';

const sendForm = async (value) => {
  try {
    const { data } = await axios.post(url, value);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const form = document.querySelector('.form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const phoneNumber = formData.get('phone');

  if (!input.value.trim()) {
    alert('Заповніть всі поля');
  }

  const data = { name, email, phoneNumber };

  sendForm(data);
});
