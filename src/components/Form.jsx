import { Paper, TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { LABEL_DEPARTMENT, LABEL_NAME, LABEL_SURNAME, LOGIN_BUTTON, PLACEHOLDER_DEPARTMENT } from '../constants/constText';
import { useNavigate } from 'react-router-dom';
import { login } from '../service/service';

function Form() {

    // router ile sayfalar arası geçiş yapmak için bu hook'u kullanıyoruz.
    // Bunları farklı bir klasörde tutabiliriz her sayfada tek tek kullanmaktansa
    // Daha düzgün olur şimidlik kalsın böyle
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");

  const handleClick = async () => {
    // Inputlar boşsa diğer sayfaya geçişi engelliyoruz.
    if (!name || !surname || !department) {
      // Inputlar boşsa, uyarı mesajı yazdırıyoruz.
      const errorMessage = document.createElement('p');
      errorMessage.style.color = 'red';
      setError("Bütün alanları doldurunuz");
      document.getElementById('form').appendChild(errorMessage);
      return;
    }
    
  
    try {
      const response = await login(name, surname, department);
      if(response === "Login successful!") {
        navigate("order");
        localStorage.setItem("name", name);
        console.log(response)
      }
        // Giriş yapılamadıysa, bir hata mesajı yazdırıyoruz.
    } catch (error) {
      const errorMessage = document.createElement('p');
      errorMessage.style.color = 'red';
      document.getElementById('form').appendChild(errorMessage);
      setError("Giriş yapılamadı. Lütfen bilgilerinizi kontrol edin.");
      console.log(error);
    }}
  

  return (
      <Paper elevation={1} className="mt-5 w-75">
      <form id='form' style={{ padding: "50px 20px 50px 20px" }} className="text-center">
        <div className="mb-4">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-light w-75"
            label={LABEL_NAME}
            variant="outlined"
          />
        </div>
        <div className="mb-4">
          <TextField
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="bg-light w-75"
            label={LABEL_SURNAME}
            variant="outlined"
          />
        </div>
        <div className="mb-4">
          <TextField
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="bg-light w-75"
            placeholder={PLACEHOLDER_DEPARTMENT}
            label={LABEL_DEPARTMENT}
            variant="outlined"
          />
        </div>
        <div className="mb-4 text-center w-100">
          <Button onClick={handleClick} variant="warning" className="w-75">
            {LOGIN_BUTTON}
          </Button>
        </div>
        {error && <div className="text-danger mb-4">{error}</div>}
      </form>
    </Paper>
  );
}

export default Form;
