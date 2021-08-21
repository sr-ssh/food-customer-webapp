import React, {useState} from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { history } from '../../helpers';
import moment from 'jalali-moment';
import persianJs from 'persianjs/persian.min';
import commaNumber from 'comma-number'


//components
import { InLineOrderHeader } from './inLineOrderHeader';
import { InLineOrderText } from './inLineOrderText';
import { CancelOrder } from './cancelOrder';
import { useDispatch } from 'react-redux';
import { payAction } from '../../actions';



export const InLineOrder = ({order, refresh, setRefresh}) => {

    const [modalShow, setmodalShow] = useState(false)
    const dispatch = useDispatch()

    const orderDetails = (orderId) => {
        localStorage.setItem('orderId', orderId)
        history.push('/order/detail')
    }

    const payOrder = (orderId) => {
        dispatch(payAction.payOrder({orderId: orderId}))
    }

    return (
        <>
        <Card className="mt-4 main-card-order border-0">
            <Card.Body className="main-card-order p-1 bg-white">
                <InLineOrderHeader order={order} />
                <Row className="d-flex flex-column mx-2 mt-2">
                    <Col className="p-0 py-2">
                        <span className="ps-2 ">{persianJs(moment.from(order.createdAt, 'YYYY/MM/DD').locale('fa').format('ddd')).englishNumber().toString()}</span>
                        <span className="ps-2 ">
                            {persianJs(moment.from(order.createdAt, 'YYYY/MM/DD').locale('fa').format('DD MMMM')).englishNumber().toString()}
                        </span>
                        <span className="ps-2 ">
                            {persianJs(moment.from(order.createdAt, 'YYYY/MM/DD').locale('fa').format('HH:mm')).englishNumber().toString()}
                        </span>
                    </Col>
                    <InLineOrderText order={order} />
                </Row>
                <Row className="me-2 ms-2 g-0">
                    <Col className="d-flex flex-row">
                        <Col onClick={() => orderDetails(order._id)}>
                            <Button className={`col-12 main-card-btn-order-detail px-0 ${order.paid ? 'btn--red--one' : 'btn--red--two'}`}>
                                <span className="">جزییات سفارش</span>
                            </Button>
                        </Col>
                        { 
                            order.status.status === 0 ?
                            <Col className="text-start ps-1" onClick={() => setmodalShow(true)}>
                                <Button className="col-11 main-card-btn-order-detail btn--red--two ">
                                    <span className="">کنسل کردن</span>
                                </Button>
                            </Col>
                            : null
                        }
                    </Col>
                </Row>
                <Row className="me-2 ms-2 g-0">
                    <Col className="d-flex flex-row">
                        {
                            !order.paid ?
                            <Col onClick={() => payOrder(order._id)}>
                                <Button className="col-12  main-card-btn-order-checkout btn btn-danger btn--red--one ">
                                    <Row className="px-3">
                                        <Col className="text-end">پرداخت </Col>
                                        <Col className="text-start"> {persianJs(commaNumber(order.total)).englishNumber().toString()} تومان</Col>
                                    </Row>
                                    
                                </Button>
                            </Col> 
                            : null
                        }
                    </Col>
                </Row>
            </Card.Body>
            <CancelOrder orderId={order._id} show={modalShow} onHide={() => { setmodalShow(false); setRefresh(!refresh); }} />
        </Card>
        </>
    )
}