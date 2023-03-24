import { TextField } from '@mui/material'
import { Button } from 'react-bootstrap'
import React from 'react'

function Form() {

  return (
    <form>
      <div className='mb-4'>
        <TextField
          className='bg-light w-100'
          label="Name / Surname"
          variant='outlined'
        />
      </div>
      <div className='mb-4'>
        <TextField
          className='bg-light w-100'
          placeholder='ar-ge, ür-ge...'
          label="Department"
          variant='outlined'
        />
      </div>
      <div className='mb-4 text-center w-100'>
        <Button className='w-50' variant='warning'>Giriş</Button>
      </div>
    </form>
  )
}

export default Form