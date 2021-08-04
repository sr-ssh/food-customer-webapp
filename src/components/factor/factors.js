import React from 'react';
import { Container, Row, Col, Table, Form, Card, Button } from 'react-bootstrap';
import { Header } from '../base/header2'



//components
import { OrderList } from "./orderList";

export const Factor = (props) => {
    let total = props.location.state?.data.map(data=>data.price * data.number).reduce((a,b)=>(a * 1) + (b * 1) ,0)
    let tax = props.location.state?.data.map(data=>data.price * (9 / 100)).reduce((a,b)=>a + b ,0)
    const totalAmount = total + tax + 75
    return (
        <>
            <div className="factor-page">
                <Header title="فاکتور" backLink="" backtext="سفارش" />
                <Container className=" pt-2 px-4  d-flex flex-column factor-page-container" >
                    <OrderList  data ={props.location.state}/>
                    <Row className="m-0 p-0 mt-2 factor-inputs">
                        <Col className="p-0 factor-description-input">
                            <Form.Group controlId="description">
                                <Form.Label className="pe-2">توضیحات</Form.Label>
                                <Card className="border-0 bg-transparent" >
                                    <Form.Control as="textarea" name="description" className="description-text-container" />
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
                                    <span className="factor--text--details">تومان</span> <span className="fw-bold">{total}</span>
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
                                    <span className="factor--text--details">تومان</span><span className="fw-bold">75</span>
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
                                    <span className="factor--text--details">تومان</span><span className="fw-bold">{tax}</span>
                                </Card.Text>
                            </Col>
                        </Row>
                    </Row>
                    <Row className="mt-auto align-self-center w-100">
                        <Col className="col-12 px-0">
                            <Button className="col-12 d-flex flex-row justify-content-between align-items-center factor--btn--checkout--order btn--red--one ">
                                <span className="pe-2">پرداخت</span>
                                <span className="ps-2"> {totalAmount} تومان</span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>


    )
}