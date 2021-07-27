import React from 'react';
import { Container, Row, Col, Table, Form, Card, Button } from 'react-bootstrap';
import { Header } from '../base/header2'



export const OrderDetails = () => {



    return (
        <>
            <div className="order--details--page">
                <Header title="جزییات سفارش" backLink="" backtext="خانه" />
                <Container className="m-auto">
                    <Card className="m-auto mt-3 bg-white border-0 lh-lg rounded-4">
                        <Card.Body className="p-2 px-3 text-gray mb-2">
                            <Card.Title className="m-0 p-0 pe-2 pb-2 mt-2">
                                <div className="card--title--order-details"><span></span>در حال پخت</div>
                            </Card.Title>
                            <Row className="m-0 mt-2">
                                <Col className="d-flex ">
                                    <Card.Text className="m-0 mb-1 col-3">
                                        <span className="order--detailes--order">سفارش :</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <span className="fw-bold ps-2 text--order--details">یکشنبه</span>
                                        <span className="fw-bold ps-2 text--order--details">3 مرداد</span>
                                        <span className="fw-bold ps-2 text--order--details">12:15</span>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row className="m-0 mt-2 ">
                                <Col className="d-flex">
                                    <Card.Text className=" m-0 mb-1  col-3">
                                        <span className=" order--detailes--order">آدرس:</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <span className="ps-2 fw-bold text--order--details">امیریه 31</span>
                                        <span className="ps-2 fw-bold text--order--details">آراسته 1</span>
                                        <span className="ps-2 fw-bold text--order--details">مجتمع سهند</span>
                                        <span className="ps-2 fw-bold text--order--details">طبقه 3</span>
                                        <span className="ps-2 fw-bold text--order--details">واحد 6</span>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row className="m-0 mt-3 orderdetails--Container">
                                <Col>
                                    <Row>
                                        <Card className="border-0 p-3 pt-2 orderdetails--Container orderdetails--Container--bg">
                                            <Card.Body className="p-0 orderdetails--flex">
                                                <Row className="pt-0">
                                                    <div >
                                                        <Table className="lh-lg" borderless size="sm">
                                                            <thead>
                                                                <tr>
                                                                    <th className="fw-bold">سفارش</th>
                                                                    <th className="fw-bold text-center">قیمت <span className="order--detailes--order--cards">(تومان)</span></th>
                                                                    <th className="fw-bold text-center">تعداد</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>رست بیف</td>
                                                                    <td className="text-center">75</td>
                                                                    <td className="pe-3">2</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>پپرونی</td>
                                                                    <td className="text-center">60</td>
                                                                    <td className="pe-3">1</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>نوشابه کوکا</td>
                                                                    <td className="text-center">20</td>
                                                                    <td className="pe-3">2</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>نوشابه کوکا</td>
                                                                    <td className="text-center">20</td>
                                                                    <td className="pe-3">2</td>
                                                                </tr>

                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                    <Row className="border-top-red pt-2 mt-auto">
                                                        <Col className="col-6 col-sm-7 ms-3 pe-1">
                                                            <span className="order--detailes--order--cards fw-bold order--details--text--footer-cards--order">هزینه ارسال :</span>
                                                        </Col>
                                                        <Col className="px-1 fw-bold">
                                                            5
                                                        </Col>
                                                        <Col className="col-6 col-sm-7 ms-3 pe-1">
                                                            <span className="order--detailes--order--cards fw-bold order--details--text--footer-cards--order">مالیات :</span>
                                                        </Col>
                                                        <Col className="px-1 fw-bold">
                                                            5
                                                        </Col>
                                                        <Col className="col-6 col-sm-7 ms-3 pe-1">
                                                            <span className="order--detailes--order--cards fw-bold order--details--text--footer-cards--order">جمع کل :</span>
                                                        </Col>
                                                        <Col className="px-1 fw-bold">
                                                            5<span className="me-2  txt--color--red--one">تومان</span>
                                                        </Col>
                                                    </Row>
                                                </Row>


                                            </Card.Body>
                                        </Card>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="m-0 mt-2">
                                <Col className="d-flex ">
                                    <Card.Text className="m-0 mb-1 col-3">
                                        <span className="order--detailes--order">توضیحات :</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <span className="fw-bold ps-2 text--order--details">لطفا زمانی که رسیدید تماس بگیرید.</span>
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="m-auto mt-3 bg-white border-0 lh-lg rounded-4">
                        <Card.Body className="p-2 px-3  text-gray">
                            <Card.Title className="m-0 p-0 pe-2 pb-2 mt-2">
                                <div className="card--title--order-details"><span></span>در انتظار پرداخت</div>
                            </Card.Title>
                            <Row className="m-0 mt-2">
                                <Col className="d-flex ">
                                    <Card.Text className="m-0 mb-1 col-3">
                                        <span className="order--detailes--order">سفارش :</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <span className="fw-bold ps-2 text--order--details">یکشنبه</span>
                                        <span className="fw-bold ps-2 text--order--details">3 مرداد</span>
                                        <span className="fw-bold ps-2 text--order--details">12:15</span>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row className="m-0 mt-2 ">
                                <Col className="d-flex">
                                    <Card.Text className=" m-0 mb-1  col-3">
                                        <span className=" order--detailes--order">آدرس:</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <span className="ps-2 fw-bold text--order--details">امیریه 31</span>
                                        <span className="ps-2 fw-bold text--order--details">آراسته 1</span>
                                        <span className="ps-2 fw-bold text--order--details">مجتمع سهند</span>
                                        <span className="ps-2 fw-bold text--order--details">طبقه 3</span>
                                        <span className="ps-2 fw-bold text--order--details">واحد 6</span>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row className="m-0 mt-3 orderdetails--Container">
                                <Col>
                                    <Row>
                                        <Card className="border-0 p-3 pt-2 orderdetails--Container orderdetails--Container--bg">
                                            <Card.Body className="p-0 orderdetails--flex">
                                                <Row className="pt-0">
                                                    <div >
                                                        <Table className="lh-lg" borderless size="sm">
                                                            <thead>
                                                                <tr>
                                                                    <th className="fw-bold">سفارش</th>
                                                                    <th className="fw-bold text-center">قیمت <span className="order--detailes--order--cards">(تومان)</span></th>
                                                                    <th className="fw-bold text-center">تعداد</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>رست بیف</td>
                                                                    <td className="text-center">75</td>
                                                                    <td className="pe-3">2</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>پپرونی</td>
                                                                    <td className="text-center">60</td>
                                                                    <td className="pe-3">1</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>نوشابه کوکا</td>
                                                                    <td className="text-center">20</td>
                                                                    <td className="pe-3">2</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>نوشابه کوکا</td>
                                                                    <td className="text-center">20</td>
                                                                    <td className="pe-3">2</td>
                                                                </tr>

                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                    <Row className="border-top-red pt-2 mt-auto">
                                                        <Col className="col-6 col-sm-7 ms-3 pe-1">
                                                            <span className="order--detailes--order--cards fw-bold order--details--text--footer-cards--order">هزینه ارسال :</span>
                                                        </Col>
                                                        <Col className="px-1 fw-bold">
                                                            5
                                                        </Col>
                                                        <Col className="col-6 col-sm-7 ms-3 pe-1">
                                                            <span className="order--detailes--order--cards fw-bold order--details--text--footer-cards--order">مالیات :</span>
                                                        </Col>
                                                        <Col className="px-1 fw-bold">
                                                            5
                                                        </Col>
                                                        <Col className="col-6 col-sm-7 ms-3 pe-1">
                                                            <span className="order--detailes--order--cards fw-bold order--details--text--footer-cards--order">جمع کل :</span>
                                                        </Col>
                                                        <Col className="px-1 fw-bold">
                                                            5<span className="me-2  txt--color--red--one">تومان</span>
                                                        </Col>
                                                    </Row>
                                                </Row>


                                            </Card.Body>
                                        </Card>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="m-0 mt-2">
                                <Col className="d-flex ">
                                    <Card.Text className="m-0 mb-1 col-3">
                                        <span className="order--detailes--order">توضیحات :</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <span className="fw-bold ps-2 text--order--details">لطفا زمانی که رسیدید تماس بگیرید.</span>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row className="m-0 mt-2 align-self-center w-100">
                                <Col className="col-12 px-2">
                                    <Button className="col-12 d-flex flex-row justify-content-between align-items-center factor--btn--checkout--order bg-red-one">
                                        <span className="pe-2">پرداخت</span>
                                        <span className="ps-2"> 230 تومان</span>
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>

            </div>

        </>


    )
}