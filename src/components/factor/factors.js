import React from 'react';
import { Container, Row, Col, Table, Form, Card, Button } from 'react-bootstrap';
import { Header } from '../base/factorHeader'


// Assets
import deleteIcon from '../../assets/images/factor/delete.svg'


export const Factor = () => {


    return (
        <>
            <div className="factor-page">
                <Header title="فاکتور" backLink="" backtext="سفارش" />
                <Container className="pt-2 px-3 m-0 d-flex flex-column factor-page-container" >
                    <Row className="m-0 mt-3 p-0">
                        <Col className="p-0">
                            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                <Table className="lh-lg p-0" borderless size="sm">
                                    <tbody>
                                        <tr>
                                            <td className="m-0 p-0 pb-1"><span className="fw-bold ms-5">رست بیف</span></td>
                                            <td className="text-center m-0 p-0 ps-2"><span className="fw-bold">75</span><span className="factor--text--details">تومان</span></td>
                                            <td className="m-0 p-0"><span className="fw-bold">2</span><span className="factor--text--details">عدد</span></td>
                                            <td className="m-0 p-0"><img src={deleteIcon} className="" height="22px" alt="delete-icon" /></td>
                                        </tr>
                                        <tr>
                                            <td className="m-0 p-0 pb-1"><span className="fw-bold ms-5">پپرونی</span></td>
                                            <td className="text-center m-0 p-0 ps-2"><span className="fw-bold">60</span><span className="factor--text--details">تومان</span></td>
                                            <td className="m-0 p-0"><span className="fw-bold">1</span><span className="factor--text--details">عدد</span></td>
                                            <td className="m-0 p-0"><img src={deleteIcon} className="" height="22px" alt="delete-icon" /></td>
                                        </tr>
                                        <tr>
                                            <td className="m-0 p-0 pb-1"><span className="fw-bold ms-5">نوشابه کوکا</span></td>
                                            <td className="text-center m-0 p-0 ps-2"><span className="fw-bold">20</span><span className="factor--text--details">تومان</span></td>
                                            <td className="m-0 p-0"><span className="fw-bold">2</span><span className="factor--text--details">عدد</span></td>
                                            <td className="m-0 p-0"><img src={deleteIcon} className="" height="22px" alt="delete-icon" /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
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
                                    <span className="factor--text--details">تومان</span> <span className="fw-bold">75</span>
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
                                    <span className="factor--text--details">تومان</span><span className="fw-bold">75</span>
                                </Card.Text>
                            </Col>
                        </Row>
                    </Row>
                    <Row className="mt-auto align-self-center w-100">
                        <Col className="col-12 px-0">
                            <Button className="col-12 d-flex flex-row justify-content-between align-items-center factor--btn--checkout--order bg-red-one">
                                <span className="pe-2">پرداخت</span>
                                <span className="ps-2"> 230 تومان</span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>


    )
}