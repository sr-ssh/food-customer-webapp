import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { Header } from '../base/stateHeader'
import { toFarsiNumber } from '../../helpers/util'
import commaNumber from 'comma-number'
import persianJs from 'persianjs/persian.min';

//components
import { OrderList } from "./orderList";
import { useDispatch } from 'react-redux';
import { orderAction } from '../../actions/orderAction';
import { history } from '../../helpers';

export const Factor = (props) => {

    const [total, setTotal] = useState(props.location.state.data?.map(data => (data.price - data.discount) * data.quantity).reduce((a, b) => a + b, 0))
    const [tax, setTax] = useState(props.location.state?.data?.map(data => (data.price - data.discount) * data.quantity * (9 / 100)).reduce((a, b) => a + b, 0))
    let userAddress = JSON.parse(localStorage.getItem('userAddress'))
    const [products, setProducts] = useState(props.location.state.data)
    let deliveryCost = JSON.parse(localStorage.getItem('addressVerify')).deliveryCost
    const [order, setOrder] = useState({ products, deliveryCost, lat: userAddress.lat, lng: userAddress.lng, address: userAddress.address })
    const dispatch = useDispatch()
    const [isBtnSubmited, setIsBtnSubmited] = useState(false)
    const totalAmount = total + tax + deliveryCost


    const descHandler = e => {
        setOrder({ ...order, description: e.target.value })
    }

    const addOrder = () => {
        dispatch(orderAction.addOrder(order))
    }


    return (
        <>
            <div className="factor-page">
                <Header title="فاکتور" backLink="/order" state={products} backtext="سفارش" />
                <Container className=" pt-2 px-4  d-flex flex-column factor-page-container" >
                    <OrderList products={products} total={total} setTotal={setTotal} setProducts={setProducts} tax={tax} setTax={setTax} />
                    <Row className="m-0 p-0 mt-2 factor-inputs">
                        <Col className="p-0 factor-description-input">
                            <Form.Group controlId="description">
                                <Form.Label className="pe-2">توضیحات</Form.Label>
                                <Card className="border-0 bg-transparent" >
                                    <Form.Control as="textarea" name="description" className="description-text-container" onChange={descHandler} />
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
                                    <span className="factor--text--details">تومان </span> <span className="fw-bold">{total && persianJs(commaNumber(total)).englishNumber().toString()}</span>
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
                                    <span className="factor--text--details">تومان</span><span className="fw-bold">{deliveryCost && persianJs(commaNumber(deliveryCost)).englishNumber().toString()}</span>
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
                                    <span className="factor--text--details">تومان</span><span className="fw-bold">
                                        {tax && persianJs(commaNumber(tax)).englishNumber().toString()}
                                    </span>
                                </Card.Text>
                            </Col>
                        </Row>
                    </Row>
                    <Row className="mt-auto mx-0 align-self-center w-100">
                        <Col className="col-12 px-0" >
                            {

                                !isBtnSubmited ?
                                    <Button className="col-12 d-flex flex-row justify-content-between align-items-center factor--btn--checkout--order btn--red--one " disabled>
                                        <span className="pe-2">پرداخت</span>
                                        <span className="ps-2"> {totalAmount && persianJs(commaNumber(totalAmount)).englishNumber().toString()} تومان</span>
                                    </Button>
                                    :
                                    <Button className="col-12 d-flex flex-row justify-content-between align-items-center factor--btn--checkout--order btn--red--one " onClick={() => { addOrder(); setIsBtnSubmited(true) }}>
                                        <span className="pe-2">پرداخت</span>
                                        <span className="ps-2"> {totalAmount && persianJs(commaNumber(totalAmount)).englishNumber().toString()} تومان</span>
                                    </Button>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>

        </>


    )
}