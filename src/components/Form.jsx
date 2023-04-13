import { Paper, TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { EMPTY_ERROR, LABEL_NAME, LABEL_SURNAME, LOGIN_BUTTON, LOGIN_ERROR, REGISTER_FORM, USER_PASSWORD } from '../constants/constText';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../service/service';
import { useDispatch } from 'react-redux';
import { changeDepartment } from '../redux/slices/itemsSlice';

function Form() {

  // router ile sayfalar arası geçiş yapmak için bu hook'u kullanıyoruz.
  // Bunları farklı bir klasörde tutabiliriz her sayfada tek tek kullanmaktansa
  // Daha düzgün olur şimidlik kalsın böyle
  const navigate = useNavigate();

  // HOOKS
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [surname, setSurname] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const departments = [
    "Departman Seçiniz",
    "Çay Ocağı",
    "Çay Ocağı(VIP)",
    "AR-GE",
    "ÜR-GE",
    "Muhasebe"
  ]


  const handleClick = async () => {
    // Inputlar boşsa diğer sayfaya geçişi engelliyoruz.
    if (!name || !surname || !department || !password) {
      // Inputlar boşsa, uyarı mesajı yazdırıyoruz.
      const errorMessage = document.createElement('p');
      errorMessage.style.color = 'red';
      setError(EMPTY_ERROR);
      document.getElementById('form').appendChild(errorMessage);

      return;
    }


    try {
      const response = await login(name, surname, department, password);
      if (response === "Login successful!") {
        if (department === "Çay Ocağı" || department === "Çay Ocağı(VIP)") {
          localStorage.setItem("name", name);
          localStorage.setItem("surname", surname);
          dispatch(changeDepartment(department))
          navigate("/receiver");
        }
        else {
          localStorage.setItem("name", name);
          localStorage.setItem("surname", surname);
          localStorage.setItem("department", department);
          dispatch(changeDepartment(department));
          console.log(response)
          console.log(department)
          navigate("order");
        }
      }

      // Giriş yapılamadıysa, bir hata mesajı yazdırıyoruz.
    } catch (error) {
      console.log("hatalı isim falan")
      const errorMessage = document.createElement('p');
      errorMessage.style.color = 'red';
      setError(LOGIN_ERROR);
      document.getElementById('form').appendChild(errorMessage);
      console.log(error);
      return
    }
  }


  return (
    <Paper elevation={1} style={{ marginTop: "50px" }} className="text-center w-75">
      <h1 className='pt-3'>Giriş Sayfası</h1>
      <form id='form' className="text-center">
        <div className="p-1">
          <TextField
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="bg-light w-75"
            label={LABEL_NAME}
            variant="outlined"
          />
        </div>
        <div className="p-1">
          <TextField
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="bg-light w-75"
            label={LABEL_SURNAME}
            variant="outlined"
          />
        </div>
        <div className='p-1'>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-light w-75'
            label={USER_PASSWORD}
            variant='outlined'
          />
        </div>
        <div className="p-1">
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="form-select form-select-lg w-75 m-auto" >
            {departments.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>
        </div>
        <div className="p-1 text-center w-100">
          <Button onClick={handleClick} variant="warning" className="w-75">
            <span className='text-dark'>{LOGIN_BUTTON}</span>
          </Button>
          <div className='mt-3'>
            <Link to={"register"} className='text-decoration-none'>{REGISTER_FORM}</Link>
          </div>
        </div>
        {error && <div className="text-danger p-1">{error}</div>}
      </form>
    </Paper>
  );
}

export default Form;






