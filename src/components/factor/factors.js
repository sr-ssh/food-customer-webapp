import React, { useState } from 'react';
import { Container, Row, Col, Table, Form, Card, Button } from 'react-bootstrap';
import { Header } from '../base/header2'
import persianJs from 'persianjs/persian.min';

//components
import { OrderList } from "./orderList";
import { useDispatch } from 'react-redux';
import { orderAction } from '../../actions/orderAction';

export const Factor = (props) => {

    let total = props.location.state.data?.map(data=>data.price * data.quantity).reduce((a,b)=>a + b ,0)
    let tax = props.location.state?.data?.map(data=>data.price * data.quantity * (9 / 100)).reduce((a,b)=>a + b ,0)
    let deliveryCost = JSON.parse(localStorage.getItem('addressVerify')).deliveryCost
    const totalAmount = total + tax + deliveryCost

    let userAddress = JSON.parse(localStorage.getItem('userAddress'))
    const [products, setProducts] = useState(props.location.state.data)
    const [order, setOrder] = useState({products, deliveryCost, lat: userAddress.lat, lng: userAddress.lng, address: userAddress.address})
    const dispatch = useDispatch()

    const descHandler = e => {
        setOrder({ ...order, description: e.target.value })
    }

    const addOrder = () => {
        dispatch(orderAction.addOrder(order))
    }

    return (
        <>{console.log(props)}
            <div className="factor-page">
                <Header title="فاکتور" backLink="/order" backtext="سفارش" />
                <Container className=" pt-2 px-4  d-flex flex-column factor-page-container" >
                    <OrderList  data ={products}/>
                    <Row className="m-0 p-0 mt-2 factor-inputs">
                        <Col className="p-0 factor-description-input">
                            <Form.Group controlId="description">
                                <Form.Label className="pe-2">توضیحات</Form.Label>
                                <Card className="border-0 bg-transparent" >
                                    <Form.Control as="textarea" name="description" className="description-text-container" onChange={descHandler}/>
                                </Card>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className=" mt-3 pe-2">
                        <Row className="mt-3">
                            <Col>
                                <Card.Text>
                                    <span className="factor--text--details">مجموع:</span>
                                </Card.Text>
                            </Col>
                            <Col dir="ltr" className="ps-0">
                                <Card.Text className="d-flex">
                                    <span className="factor--text--details">تومان </span> <span className="fw-bold">{persianJs(total).englishNumber().toString()}</span>
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <Card.Text>
                                    <span className="factor--text--details">هزینه ارسال</span>
                                </Card.Text>
                            </Col>
                            <Col dir="ltr" className="ps-0">
                                <Card.Text className="d-flex">
                                    <span className="factor--text--details">تومان</span><span className="fw-bold">{persianJs(deliveryCost).englishNumber().toString()}</span>
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <Card.Text>
                                    <span className="factor--text--details">  مالیات: </span>
                                </Card.Text>
                            </Col>
                            <Col dir="ltr" className="ps-0">
                                <Card.Text className="d-flex">
                                    <span className="factor--text--details">تومان</span><span className="fw-bold">{persianJs(tax).englishNumber().toString()}</span>
                                </Card.Text>
                            </Col>
                        </Row>
                    </Row>
                    <Row className="mt-auto align-self-center w-100">
                        <Col className="col-12 px-0" onClick={() => addOrder()}>
                            <Button className="col-12 d-flex flex-row justify-content-between align-items-center factor--btn--checkout--order btn--red--one ">
                                <span className="pe-2">پرداخت</span>
                                <span className="ps-2"> {persianJs(totalAmount).englishNumber().toString()} تومان</span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>


    )
}