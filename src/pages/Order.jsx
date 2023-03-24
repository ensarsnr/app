import React from 'react'
import { Container, Row } from 'react-bootstrap'
import AppBar from '../components/AppBar'
import OrderMenu from '../components/OrderMenu'
import OrderOutput from '../components/OrderOutput'

function Order() {
    // Siparişler buradan verilir
    return (
        <div>
            {/* == AppBar == */}
            <AppBar element={
                <div className="text-center">
                    <a href="#" className="text-decoration-none">
                        Çıkış
                    </a>
                </div>} name={<div className='text-center'>Welcome: name</div>}
            />
            {/* == AppBar == */}
            <Container>
                <Row>
                    <div className='col-4'>
                        <h1 className='mt-5 text-center text-danger'>Sipariş</h1>
                        <OrderMenu />
                    </div>
                    <div className='col-8'>
                        <h1 className='text-center mt-5 text-danger'>Son Siparişler</h1>
                        <OrderOutput />
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Order