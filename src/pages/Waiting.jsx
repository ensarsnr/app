import { Link } from 'react-router-dom'
import AppBar from '../components/AppBar'
import WaitingAnimation from '../components/WaitingAnimation'
import SelectedList from '../components/SelectedList'

import { ALERT_HEADING, EXIT_APPBAR, FOOD_MENU } from '../constants/constText'
import { Alert } from 'react-bootstrap'
import { useState } from 'react'

function Waiting() {
    const [show, setShow] = useState(true);
    return (
        <>
            {/* ========== AppBar =============== */}
            <AppBar
                element={
                    <div>
                        <Link to={"/"} className="text-light text-decoration-none">
                            {EXIT_APPBAR}
                        </Link>
                    </div>
                }
                name={
                    <div className='text-center'>Lütfen Bekleyiniz..</div>
                }
                foodMenu={
                    <div className='float-end'>
                        <Link to="menu" className="text-light text-decoration-none">
                            {FOOD_MENU}
                        </Link>
                    </div>
                }
            />
            {/* ========= AppBar ============ */}
            {show && (
                <Alert variant="success" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>{ALERT_HEADING}</Alert.Heading>
                </Alert>
            )}
            <div className='row'>
                <div className='col-12'>
                    <WaitingAnimation />
                </div>
                <div className='col-12'>
                    <SelectedList />
                </div>
            </div>
        </>
    )
}

export default Waiting
