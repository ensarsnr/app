import { Paper, TextField } from '@mui/material'
import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { LABEL_DEPARTMENT, LABEL_NAME, LABEL_SURNAME, LOGIN_BUTTON, PLACEHOLDER_DEPARTMENT } from '../constants/constText'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeName } from '../redux/slices/namesSlice'
function Form() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [department, setDepartment] = useState("");

  const handleClick = () => {

    //Post işlemi ile girişi sağlarız buradan.

    if (!name || !surname || !department) {
      console.log("Boş geçme")
    } else {

      dispatch(changeName({ name: name }))
      navigate("order")
    }
  }


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