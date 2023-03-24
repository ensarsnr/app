import { Paper, TextField } from '@mui/material'
import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

function Form() {

  return (
    <Paper elevation={1} className="mt-5 w-75">
      <form style={{padding:"100px 20px 100px 20px"}} className='text-center'>
      <div className='mb-4'>
        <TextField
          className='bg-light w-75'
          label="Name / Surname"
          variant='outlined'
        />
      </div>
      <div className='mb-4'>
        <TextField
          className='bg-light w-75'
          placeholder='ar-ge, ür-ge...'
          label="Department"
          variant='outlined'
        />
      </div>
      <div className='mb-4 text-center w-100'>
        
        <Link to={"/order"}>
          <Button variant='warning' className='w-75'>Giriş</Button>
        </Link>
      </div>
    </form>
    </Paper>
  )
}

export default Form