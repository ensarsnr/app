import { Paper, TextField } from '@mui/material'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { LABEL_NAME, LABEL_SURNAME, USER_PASSWORD } from '../constants/constText'

function Register() {


    // const [name, setName] = useState();
    // const [department, setDepartment] = useState("");

    const departments = [
        "Çay Ocağı",
        "AR-GE",
        "ÜR-GE",
        "Muhasebe"
    ]

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
                                <TextField className='w-75' label={LABEL_NAME} />
                            </div>
                            <div className='p-2'>
                                <TextField className='w-75' label={LABEL_SURNAME} />
                            </div>

                            <div className='p-2'>
                                <TextField className='w-75' type='password' label={USER_PASSWORD} />
                            </div>
                            <div className='p-2'>
                                <select class="form-select form-select-lg w-75 m-auto" >
                                    {departments.map((e) => (
                                        <option>{e}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='p-2'>
                                <Button variant='success' className='p-2 w-75'>Kayıt Ol</Button>
                            </div>
                        </form>
                    </Paper>
                </Col>
            </Row>
        </Container>
    )
}

export default Register