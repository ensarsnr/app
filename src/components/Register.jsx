import { Paper, TextField } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { LABEL_NAME, LABEL_SURNAME } from '../constants/constText'

function Register() {
  return (
    <Container>
        <Row>
            <Col>
                <Paper elevation={3}>
                    <form className='text-center'>
                        <div className='p-2'>
                            <TextField label={LABEL_NAME} />
                        </div> 
                        <div className='p-2'>
                            <TextField label={LABEL_SURNAME} />
                        </div> 
                        <div className='p-2'>
                            <TextField />
                        </div>
                        <div className='p-2'>
                            <TextField />
                        </div> 
                    </form>    
                </Paper>
            </Col>
            <Col>
                alsdkfiş
            </Col>
        </Row>
    </Container>
  )
}

export default Register