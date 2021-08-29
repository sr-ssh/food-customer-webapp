import React, { useState } from 'react';
import logo from './../../assets/images/payment/Payment-online-was-successful.png'
import logo2 from './../../assets/images/payment/Payment-online-was-unsuccessful.svg'
import { history } from '../../helpers'
import { Button, Col, Collapse, Container, Image, Row } from 'react-bootstrap';

// icon
import payIcon from './../../assets/images/payment/Payment-online-was-unsuccessful.svg'


export const FailPay = () => {

    return (
        <Container className="payment--unsuccessful d-flex flex-column justify-content-around text-center">
            <Row>
                <Image src={payIcon} alt="payIcon" height="380px"/>
            </Row>
            <Row onClick={() => history.push('/')}>
                <Col>
                    <Button className="fs-6 fw-bold py-3 px-5 pay--return--button--fail">بازگشت به هپی پیتزا</Button>
                </Col>
            </Row>
        </Container>
    )
}