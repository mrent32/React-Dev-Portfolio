import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'

export const Header = () => {
    return (<>
    <Container fluid className='bg-dark'>
        <Row className='justify-content-center text-center mb-0'>
            <Col className='pb-'>
                <h1 className="text-black" style={{ fontSize: '70px'}}>
                    <Link to='/React-Dev-Portfolio/'
                    className='text-white text-decoration-none'
                    style={{ margin: '0'}}
                    >Martin Renteria</Link>
                </h1>
            </Col>
        </Row>
    </Container>
    </>)
}

