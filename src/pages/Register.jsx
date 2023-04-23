import { Paper, TextField } from '@mui/material'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { EMPTY_ERROR, ENTER_SITE, LABEL_NAME, LABEL_SURNAME, REGISTERED_ERROR, REGISTER_BUTTON, REGISTER_TITLE, USER_PASSWORD, WRONG_ERROR } from '../constants/constText'
import { useState } from 'react';
import { register } from '../service/service';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { EXT_NUMBER } from '../constants/constText';

function Register() {

    // State hook for displaying error messages to the user
    const [error, setError] = useState("");

    // `useNavigate` hook from `react-router-dom` for navigating to a different page
    const navigate = useNavigate();

    // State hooks for managing form input fields
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");

    // List of department options for the dropdown
    const departments = [
        "Select Department",
        "Tea Kitchen",
        "Tea Kitchen(VIP)",
        "R&D",
        "P&D",
        "Accounting"
    ];

    // Function for displaying error messages to the user
    const errorsMessage = (message) => {
        const errorMessage = document.createElement('p');
        errorMessage.style.color = 'red';
        setError(message);
        document.getElementById('form').appendChild(errorMessage);
    };

    // Function that is called when the user clicks the "Register" button
    const handleClick = async () => {
        // Check if any of the required input fields are empty
        if (!name || !surname || !department || !password || !number) {
            errorsMessage(EMPTY_ERROR);
            return;
        }

        try {
            // Call the `register` function with the input field values
            const response = await register(name, surname, department, password, number);
            if (response === "OK") {
                // If the registration is successful, navigate to the home page
                navigate("/");
            } else if (response === "registered") {
                // If the user is already registered, display an error message
                errorsMessage(REGISTERED_ERROR);
            }
            else {
                // If there is some other error, display an error message
                errorsMessage(WRONG_ERROR);
            }
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <Paper sx={{
                        margin: "auto",
                        width: "35%"
                    }} elevation={3}>
                        <Paper elevation={3} sx={{
                            background: "red",
                            width: "70%",
                            margin: "auto",
                            position: "relative",
                            bottom: "20px",
                            borderRadius: "10px"
                        }}>
                            <h2 className='p-3 pt-2 text-center text-light'>{REGISTER_TITLE}</h2>
                        </Paper>
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