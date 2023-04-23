import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Paper, TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import { changeDepartment } from '../redux/slices/itemsSlice';
import { login } from '../service/service';
import { EMPTY_ERROR, ENTER_SITE, LABEL_NAME, LABEL_SURNAME, LOGIN_BUTTON, LOGIN_ERROR, REGISTER_FORM, USER_PASSWORD, WRONG_ERROR } from '../constants/constText';

function Login() {
  const navigate = useNavigate(); //router hook

  // HOOKS
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
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
  ];

  // Hata mesajı ekleme
  const addErrorMessage = (message) => {
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    setError(message)
    document.getElementById('form').appendChild(errorMessage)
  }

  // Giriş butonuna tıklama işlemi
  const handleClick = async () => {
    // Inputlarda boş bir alan varsa sayfa geçişini engelle
    if (!name || !surname || !department || !password) {
      addErrorMessage(EMPTY_ERROR);
      return;
    }

    try {
      const response = await login(name, surname, department, password);
      if (response === "Login successful!") {
        // "Çay Ocağı" veya "Çay Ocağı(VIP)" departmanları seçilmişse, localStorage'a kullanıcının bilgilerini ekle ve receiver sayfasına yönlendir
        if (department === "Çay Ocağı" || department === "Çay Ocağı(VIP)") {
          localStorage.setItem("name", name);
          localStorage.setItem("surname", surname);
          localStorage.setItem("department", department);
          dispatch(changeDepartment(department));
          navigate("/receiver");
        } else {
          // Diğer departmanlar için de aynı işlemleri yap
          localStorage.setItem("name", name);
          localStorage.setItem("surname", surname);
          localStorage.setItem("department", department);
          dispatch(changeDepartment(department));
          console.log(response)
          console.log(department)
          navigate("/order");
        }
        // Kullanıcının girdiği bilgiler yanlışsa
      } else if (response === "not found") {
        addErrorMessage(WRONG_ERROR)
      }
      // Giriş yapılamadıysa hata mesajı göster
    } catch (error) {
      addErrorMessage(LOGIN_ERROR)
      console.log(error);
      return
    }
  }


  return (
    <Paper elevation={1} style={{ marginTop: "50px" }} className="text-center w-75">
      <Paper elevation={3} sx={{
        background: "red",
        width: "70%",
        margin: "auto",
        position: "relative",
        bottom: "20px",
        borderRadius: "10px"

      }}>
        <h2 className='pt-2 p-3 text-center text-light'>{ENTER_SITE}</h2>
      </Paper>
      {/* Form */}
      <form id='form' className="text-center">
        {/* Ad girdi alanı */}
        <div className="p-1">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-light w-75"
            label={LABEL_NAME}
            variant="outlined"
          />
        </div>
        {/* Soyad girdi alanı */}
        <div className="p-1">
          <TextField
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="bg-light w-75"
            label={LABEL_SURNAME}
            variant="outlined"
          />
        </div>
        {/* Şifre girdi alanı */}
        <div className='p-1'>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-light w-75'
            label={USER_PASSWORD}
            variant='outlined'
            type='password'
          />
        </div>
        {/* Bölüm seçimi */}
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
        {/* Giriş butonu */}
        <div className="p-1 text-center w-100">
          <Button onClick={handleClick} variant="warning" className="w-75">
            <span className='text-dark'>{LOGIN_BUTTON}</span>
          </Button>
          {/* Kayıt formuna yönlendirme bağlantısı */}
          <div className='mt-3'>
            <Link to={"register"} className='text-decoration-none'>{REGISTER_FORM}</Link>
          </div>
        </div>
        {/* Hata mesajı */}
        {error && <div className="text-danger p-1">{error}</div>}
      </form>
    </Paper>

  );
}

export default Login;






