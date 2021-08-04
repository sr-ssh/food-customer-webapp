import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { history } from '../../helpers';
import moment from 'jalali-moment';
import persianJs from 'persianjs/persian.min';

//icons
import { InLineOrderHeader } from './inLineOrderHeader';
import { InLineOrderText } from './inLineOrderText';



export const InLineOrder = ({order}) => {

    const orderDetails = (orderId) => {
        localStorage.setItem('orderId', orderId)
        history.push('/order/detail')
    }



    return (
        <>
        <Card className="mt-4 main-card-order border-0">
            <Card.Body className="main-card-order p-1 bg-white">
                <InLineOrderHeader order={order} />
                <Row className="d-flex flex-column mx-2 mt-2">
                    <Col className="p-0 py-2">
                        <span className="ps-2 ">شنبه</span>
                        <span className="ps-2 ">
                            {persianJs(moment.from(order.createdAt, 'YYYY/MM/DD').locale('fa').format('DD MMMM')).englishNumber().toString()}
                        </span>
                        <span className="ps-2 ">
                            {persianJs(moment.from(order.createdAt, 'YYYY/MM/DD').locale('fa').format('HH:MM')).englishNumber().toString()}
                        </span>
                    </Col>
                    <InLineOrderText order={order} />
                </Row>
                <Row className="me-2 g-0">
                    <Col className="d-flex flex-row">
                        <Col onClick={() => orderDetails(order._id)}>
                            <Button className="col-11 main-card-btn-order-detail btn--red--two px-0">
                                <span className="">جزییات سفارش</span>
                            </Button>
                        </Col>
                        {
                            !order.paid ?
                            <Col>
                                <Button className="col-11  main-card-btn-order-checkout btn btn-danger btn--red--one ">
                                    <span className="">پرداخت</span>
                                </Button>
                            </Col> 
                            : null
                        }
                        <Col>
                            <Button className="col-11 main-card-btn-order-detail btn--red--two ">
                                <span className="">لغو سفارش</span>
                            </Button>
                        </Col>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </>
    )
}