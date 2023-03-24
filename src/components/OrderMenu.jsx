import { style } from '@mui/system'
import React from 'react'
import { Container } from 'react-bootstrap'

function OrderMenu() {
    //cursor: pointer eklenebilir className'lere
    return (
        <Container>
            <div className='mt-5'>
                <ul className='list-group'>
                    <li className='list-group-item list-group-item-action'>Çay</li>
                    <li className='list-group-item list-group-item-action'>Kahve</li>
                    <li className='list-group-item list-group-item-action'>Soda</li>
                    <li className='list-group-item list-group-item-action'>Ihlamur</li>
                    <li className='list-group-item list-group-item-action'>Sıcak Su</li>
                </ul>
            </div>
        </Container>

    )
}

export default OrderMenu