import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Form from '../components/Form'
import HomePng from '../components/HomePng'

function Home() {
    return (
        <>
            <Container className=' mt-5'>
                <Row>
                    <div className='col-md-5 p-5 mt-5 col-sm-12'>
                        <Form />
                    </div>
                    <div className=' text-center col-md-7 col-sm-12'>
                        <div>
                            <HomePng />
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Home