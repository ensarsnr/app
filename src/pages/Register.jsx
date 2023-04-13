import { Paper, TextField } from '@mui/material'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { EMPTY_ERROR, ENTER_SITE, LABEL_NAME, LABEL_SURNAME, REGISTER_BUTTON, REGISTER_TITLE, USER_PASSWORD } from '../constants/constText'
import { useState } from 'react';
import { register } from '../service/service';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { EXT_NUMBER } from '../constants/constText';

function Register() {

    // giriş yapıldığında giriş yapıldı gibisinden bi animasyon eklenebilir.
    // true olduğunda gözzükür bir süre sonra false döner...
    const [error, setError] = useState("");


    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");

    const departments = [
        "Departman yazın",
        "Çay Ocağı",
        "Çay Ocağı(VIP)",
        "AR-GE",
        "ÜR-GE",
        "Muhasebe"
    ]

    const errorsMessage = (message) => {
        const errorMessage = document.createElement('p');
        errorMessage.style.color = 'red';
        setError(message)
        document.getElementById('form').appendChild(errorMessage)
    }


    const handleClick = async () => {
        if (!name || !surname || !department || !password || !number) {
            console.log("boş geçme")
            errorsMessage(EMPTY_ERROR)
            return;
        }


        try {
            const response = await register(name, surname, department, password, number);
            if (response === "OK") {
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <Paper sx={{
                        margin: "auto",
                        width: "35%"
                    }} elevation={3}>
                        <h1 className='pt-2 text-center'>{REGISTER_TITLE}</h1>
                        <form id='form' className='text-center'>
                            <div className='p-2 pt-3'>
                                <TextField
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='bg-light w-75'
                                    label={LABEL_NAME} />
                            </div>
                            <div className='p-2'>
                                <TextField
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                    className='bg-light w-75'
                                    label={LABEL_SURNAME} />
                            </div>
                            <div className='p-2'>
                                <TextField
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    className='bg-light w-75'
                                    label={EXT_NUMBER} />
                            </div>
                            <div className='p-2'>
                                <TextField
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='bg-light w-75'
                                    type="password"
                                    label={USER_PASSWORD} />
                            </div>
                            <div className='p-2'>
                                <select
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    className="bg-light form-select form-select-lg w-75 m-auto"
                                >
                                    {departments.map((e) => (
                                        <option key={e}>{e}</option>
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
                            <div className='p-2'>
                                <Link to={"/"} className="text-primary text-decoration-none">
                                    {ENTER_SITE}
                                </Link>
                            </div>
                            {error && <div className="text-danger p-1">{error}</div>}
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