import React from 'react';
import { history } from '../../helpers'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

// icon
import payIcon from './../../assets/images/payment/Payment-online-was-unsuccessful.svg'


export const FailPay = () => {

    return (
        <Container className="payment--unsuccessful d-flex flex-column justify-content-around text-center">
            <Row>
                <Image src={payIcon} alt="payIcon" height="380px"/>
            </Row>
            <Row onClick={() => history.push('/main')}>
                <Col>
                    <Button className="fs-6 fw-bold py-3 px-5 pay--return--button--fail">بازگشت به هپی پیتزا</Button>
                </Col>
            </Row>
        </Container>
    )
}