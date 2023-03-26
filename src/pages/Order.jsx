import React from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AppBar from '../components/AppBar'
import OrderMenu from '../components/OrderMenu'
import OrderSelected from '../components/OrderSelected'
import { CHOOSEN_ONES, CHOOSE_ORDER, EXIT_APPBAR, FOOD_MENU, WELCOME_USER } from '../constants/constText'
import "../Deneme.css"

function Order() {
    // const nameObj = useSelector((state) => state.names.name);
    // const name = nameObj.name;
    return (
        <div>
            {/* == AppBar == */}
            <AppBar element={
                <div>
                    <Link to={"/"} className="text-light text-decoration-none">
                        {EXIT_APPBAR}
                    </Link>
                </div>}
                name={
                    // {name.toString()}
                    <div className='text-center'>{WELCOME_USER}</div>
                }
                foodMenu={
                    <div className='float-end'>
                        <Link to="foodMenu" className="text-light text-decoration-none">
                            {FOOD_MENU}
                        </Link>
                    </div>
                }
            />
            {/* == AppBar == */}

            <div className='m-5'>
                <Row>
                    <div className='col-6'>
                        <h1 className='mt-5 text-center text-danger'>{CHOOSE_ORDER}</h1>
                        <OrderMenu />
                    </div>
                    <div className='col-6 text-center'>
                        <h1 className='mt-5 text-center text-danger'>{CHOOSEN_ONES}</h1>
                        <OrderSelected />
                    </div>
                </Row>
            </div>
        </div >
    )
}

export default Order