import axios from 'axios';

// create an axios instance with a base URL of the API
const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// function for user login
const login = async (name, surname, department, password) => {
  try {
    // make a post request to the '/login' endpoint with user data
    const response = await api.post('/login', {
      name: name,
      surname: surname,
      department: department,
      password: password
    });
    console.log(response.data) // log the response data to console
    return response.data;
  } catch (err) {
    console.log(err)
  }
};

// function to check if the user has an active order
const isOrder = async (is_order, id) => {
  try {
    // make a post request to the '/isActive' endpoint with user data
    const response = await api.post('/isActive', {
      is_order: is_order,
      id: id,
    });
    console.log(response.data) // log the response data to console
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// function for user registration
const register = async (name, surname, department, password, number) => {
  try {
    // make a post request to the '/register' endpoint with user data
    const response = await api.post('/register', {
      name: name,
      surname: surname,
      department: department,
      password: password,
      number: number,
    });
    console.log(response.data) // log the response data to console
    return response.data;
  } catch (err) {
    console.log(err)
  }
};

// function to get product data from the API
const productData = async (value) => {
  const response = await axios.get("http://localhost:3001/products");
  value(response.data)
}

// function to select an order
const selectOrder = async (product_name, user_name, quantity, is_order, user_department, select_coffee) => {
  try {
    // make a post request to the '/orders' endpoint with order data
    const response = await api.post('/orders', {
      product_name: product_name,
      user_name: user_name,
      quantity: quantity,
      is_order: is_order,
      user_department: user_department,
      select_coffee: select_coffee,
    });
    console.log(response.data); // log the response data to console
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export the functions to be used in other modules
export { login, productData, selectOrder, register, isOrder };
