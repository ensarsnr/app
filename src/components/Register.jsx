import { Paper, TextField } from '@mui/material'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { EMPTY_ERROR, EXT_NUMBER, LABEL_NAME, LABEL_SURNAME, USER_PASSWORD } from '../constants/constText'
import { useState } from 'react';
import { register } from '../service/service';

function Register() {
    
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("Çay Ocağı");
    const [surname, setSurname] = useState("");    
    const [extNumber, setExtNumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const departments = [
        "Çay Ocağı",
        "AR-GE",
        "ÜR-GE",
        "Muhasebe"
    ]


    const handleClick = async () => {
        if (!name || !surname || !department) {
           console.log("boş geçme")
           return;
          }
          try {
            const response = await register(name, surname, department, password);
            console.log(response);
          } catch (error) {
            console.log(error)
          }
    }



    return (
        <Container>
            <Row>
                <Col className='mt-5'>
                    <Paper sx={{
                        margin: "auto",
                        width: "50%"
                    }} elevation={3}>
                        <h1 className='text-center mt-5'>Kayıt ol</h1>
                        <form className='mt-2 text-center'>
                            <div className='p-2 pt-5'>
                                <TextField value={name} onChange={(e) => setName(e.target.value)} className='w-75' label={LABEL_NAME} />
                            </div>
                            <div className='p-2'>
                                <TextField value={surname} onChange={(e) => setSurname(e.target.value)} className='w-75' label={LABEL_SURNAME} />
                            </div>
                            <div className='p-2'>

                            </div>
                            <div className='p-2'>
                                <TextField value={password} onChange={(e) => setPassword(e.target.value)}  className='w-75' type='password' label={USER_PASSWORD} />
                            </div>
                            <div className='p-2'>
                                <select value={department} onChange={(e) => setDepartment(e.target.value)} className="form-select form-select-lg w-75 m-auto" >
                                    {departments.map((e) => (
                                        <option key={e}>{e}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='p-2'>
                                <Button variant='success' onClick={handleClick} className='p-2 w-75'>Kayıt Ol</Button>
                            </div>
                        </form>
                        <div>
                        </div>
                    </Paper>
                </Col>
            </Row>
        </Container>
    )
}

export default Register
