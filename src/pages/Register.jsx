import { Paper, TextField } from '@mui/material'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { LABEL_NAME, LABEL_SURNAME, REGISTER_BUTTON, REGISTER_TITLE, USER_PASSWORD } from '../constants/constText'
import { useState } from 'react';
import { register } from '../service/service';
import { useNavigate } from 'react-router';
import { EXT_NUMBER } from '../constants/constText';

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [department, setDepartment] = useState("Çay Ocağı");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");

    const departments = [
        "Çay Ocağı",
        "AR-GE",
        "ÜR-GE",
        "Muhasebe"
    ]


    const handleClick = async () => {
        if (!name || !surname || !department || !password || !number) {
            console.log("boş geçme")
            return;
        }
        try {
            const response = await register(name, surname, password, department, number);
            if (response === "Register successful!")
                navigate("/")
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
                        <h1 className='text-center mt-5'>
                            {REGISTER_TITLE}
                        </h1>
                        <form className='mt-2 text-center'>
                            <div className='p-2 pt-5'>
                                <TextField
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='w-75'
                                    label={LABEL_NAME} />
                            </div>
                            <div className='p-2'>
                                <TextField
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                    className='w-75'
                                    label={LABEL_SURNAME} />
                            </div>
                            <div className='p-2'>
                                <TextField
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    className='w-75'
                                    label={EXT_NUMBER} />
                            </div>
                            <div className='p-2'>
                                <TextField
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='w-75'
                                    // change type password
                                    label={USER_PASSWORD} />
                            </div>
                            <div className='p-2'>
                                <select value={department} onChange={(e) => setDepartment(e.target.value)} className="form-select form-select-lg w-75 m-auto" >
                                    {departments.map((e, i) => (
                                        <option key={i}>{e}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='p-2'>
                                <Button
                                    variant='success'
                                    onClick={handleClick}
                                    className='p-2 w-75'>
                                    {REGISTER_BUTTON}
                                </Button>
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
