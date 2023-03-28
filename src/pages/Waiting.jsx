import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Animations from '../components/Animations'
import AppBar from '../components/AppBar'
import space from '../assets/animation/space.json'
import { Alert, Container } from 'react-bootstrap'
import waiting from '../assets/animation/waiting.json'
import { ALERT_HEADING, ALERT_SUB } from '../constants/constText'

function Waiting() {

    const [show, setShow] = useState(true);

    return (
        <>
            <AppBar element={
                <div>
                    <Link to={"/"} className="text-light text-decoration-none">
                        Çıkış
                    </Link>
                </div>}
                name={
                    <div className='text-center'></div>
                }
                foodMenu={
                    <div className='float-end'>
                        <Link to="menu" className="text-light text-decoration-none">
                            Menü
                        </Link>
                    </div>
                }
            />
            {show && (
                 <Alert variant="success" onClose={() => setShow(false)} dismissible>
                 <Alert.Heading>{ALERT_HEADING}</Alert.Heading>
                 <p>{ALERT_SUB}</p>
               </Alert>
            )}
            <Container>
                <div className='row'>
                    <div
                    className='col-6' 
                    style={{
                        width: "30%",
                        margin: "auto",
                    }}>
                        <Animations  animation ={space} />
                    </div>
                    <div
                    className='col-6' 
                    style={{
                        width:"100%",
                    }}>
                        <Animations animation = {waiting} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Waiting