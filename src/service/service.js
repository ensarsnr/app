import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const login = async (name, surname, department) => {
  try {
    const response = await api.post('/login', {
      name: name,
      surname: surname,
      department: department
    });
    console.log(response.data)
    return response.data;
  } catch (err) {
    console.log(err) 
  }
};

export { login };
