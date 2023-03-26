import { Paper, TextField } from '@mui/material'
import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { LABEL_DEPARTMENT, LABEL_NAME, LABEL_SURNAME, LOGIN_BUTTON, PLACEHOLDER_DEPARTMENT } from '../constants/constText'
import { useNavigate } from 'react-router-dom'

function Form() {
  // router ile sayfalar arası geçiş yapmak için bu hook'u kullanıyoruz.
  // Bunları farklı bir klasörde tutabiliriz her sayfada tek tek kullanmaktansa
  // Daha düzgün olur şimidlik kalsın böyle
  const navigate = useNavigate();

  // 
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [department, setDepartment] = useState("");

  const handleClick = () => {
    // Inputlar boşsa diğer sayfaya geçişi engelliyoruz.
    if (!name || !surname || !department) {
      // Buraya daha güzel bir şekilde uyarı eklemek lazım
      // konsol'da yazdırmak yerine inputları kırmızı renge çevirebiliriz.
      console.log("Boş geçme")
    } else {
      // name kısmının key-value ilişkisi içinde localstorage e gönderiyoruz.
      // localde saklı kalıyor isim sonrasında kullanabiliriz.
      localStorage.setItem("name", name);
      // koşul uyuşuyorsa seni direkt order sayfasına yöneltiyor.
      navigate("order")
    }
  }
  // koşullara veritabanından gelen veriler ile eşleşme kısmı da olacak. POST metodu ile
  return (
    <Paper elevation={1} className="mt-5 w-75">
      <form style={{ padding: "50px 20px 50px 20px" }} className='text-center'>
        <div className='mb-4'>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='bg-light w-75'
            label={LABEL_NAME}
            variant='outlined'
          />
        </div>
        <div className='mb-4'>
          <TextField
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className='bg-light w-75'
            label={LABEL_SURNAME}
            variant='outlined'
          />
        </div>
        <div className='mb-4'>
          <TextField
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className='bg-light w-75'
            placeholder={PLACEHOLDER_DEPARTMENT}
            label={LABEL_DEPARTMENT}
            variant='outlined'
          />
        </div>
        <div className='mb-4 text-center w-100'>
          <Button onClick={handleClick} variant='warning' className='w-75'>{LOGIN_BUTTON}</Button>
        </div>
      </form>
    </Paper>
  )
}

export default Form
