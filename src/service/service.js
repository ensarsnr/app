import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const login = async (name, surname, department, password) => {
  try {
    const response = await api.post('/login', {
      name: name,
      surname: surname,
      department: department,
      password: password
    });
    console.log(response.data) // console'da response'ın datasını göstermeye yarıyorke
    return response.data;
  } catch (err) {
    console.log(err)
  }
};

const register = async (name, surname, department, password, number) => {
  try {
    const response = await api.post('/register', {
      name: name,
      surname: surname,
      department: department,
      password: password,
      number: number,
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

const selectOrder = async (product_name, user_name, quantity, is_order, user_department, select_coffee) => {
  try {
    const response = await api.post('/orders', {
      product_name: product_name,
      user_name: user_name,
      quantity: quantity,
      is_order: is_order,
      user_department: user_department,
      select_coffee: select_coffee,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};




export { login, productData, selectOrder, register };


