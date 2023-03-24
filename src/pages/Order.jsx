import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppBar from '../components/AppBar'
import OrderMenu from '../components/OrderMenu'
import OrderSelected from '../components/OrderSelected'
import "../Deneme.css"

function Order() {

    // Veri tabanı işlemleri eklenecek.
    
    // Siparişler buradan verilir
    return (
        <div>
            {/* == AppBar == */}
            <AppBar element={
                <div className="text-center">
                    <Link to={"/"} className="text-light text-decoration-none">
                        Çıkış
                    </Link>
                </div>} name={<div className='text-center'>Welcome: name</div>}
            />
            {/* == AppBar == */}
            
            <div className='m-5'>
                <Row>
                    <div className='col-6'>
                        <h1 className='mt-5 text-center text-danger'>Sipariş Seç</h1>
                        <OrderMenu />
                    </div>
                    <div className='col-6 text-center'>
                        <h1 className='mt-5 text-center text-danger'>Seçilenler</h1>
                        <OrderSelected />
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default Order