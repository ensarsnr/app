import { Link } from 'react-router-dom'
import AppBar from '../components/AppBar'
import WaitingAnimation from '../components/WaitingAnimation'
import SelectedList from '../components/SelectedList'

import { ALERT_HEADING, ALERT_SUB, EXIT_APPBAR, FOOD_MENU } from '../constants/constText'

function Waiting() {
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
                    <div className='text-center'></div>
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
