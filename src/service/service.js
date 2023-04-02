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


const productData = async (value) => {
  const response = await axios.get("http://localhost:3001/products");
  value(response.data)
}

const selectOrder = async (product_name, user_name) => {
  try {
    const response = await api.post('/orders', {
      product_name: product_name,
      user_name: user_name
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}



export { login, productData, selectOrder };


