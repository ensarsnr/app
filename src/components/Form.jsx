import { Paper, TextField } from '@mui/material'
import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import { LABEL_DEPARTMENT, LABEL_NAME, LABEL_SURNAME, LOGIN_BUTTON, PLACEHOLDER_DEPARTMENT, PLACEHOLDER_NAME } from '../constants/constText'

function Form() {
  return (
    <Paper elevation={1} className="mt-5 w-75">
      <form style={{ padding: "5  0px 20px 50px 20px" }} className='text-center'>
        <div className='mb-4'>
          <TextField
            className='bg-light w-75'
            label={LABEL_NAME}
            variant='outlined'
          />
        </div>
        <div className='mb-4'>
          <TextField
            className='bg-light w-75'
            label={LABEL_SURNAME}
            variant='outlined'
          />
        </div>
        <div className='mb-4'>
          <TextField
            className='bg-light w-75'
            placeholder={PLACEHOLDER_DEPARTMENT}
            label={LABEL_DEPARTMENT}
            variant='outlined'
          />
        </div>
        <div className='mb-4 text-center w-100'>

          <Link to={"/order"}>
            <Button variant='warning' className='w-75'>
              {LOGIN_BUTTON}
            </Button>
          </Link>
        </div>
      </form>
    </Paper>
  )
}

export default Form