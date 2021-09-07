import React from 'react';
import { history } from '../../helpers'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

// icon
import payIcon from './../../assets/images/payment/Payment-online-was-successful.png'


export const SuccessfullPay = () => {

    return (
        <Container className="payment--unsuccessful d-flex flex-column justify-content-around text-center">
            <Row>
                <Col>
                    <Image src={payIcon} alt="payIcon" width="320px"/>
                </Col>
                
            </Row>
            <Row onClick={() => history.push('/')}>
                <Col>
                    <Button className="fs-6 fw-bold py-3 px-5 pay--return--button--success">بازگشت به هپی پیتزا</Button>
                </Col>
            </Row>
        </Container>
    )
}