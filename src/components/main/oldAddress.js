import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


// Components
import { Header } from '../base/header2'

// Assets
import editIcon from '../../assets/images/main/edit.svg'
import addIcon from '../../assets/images/main/add-red.svg'

export const OldAddress = () => {
    return (
        <>
            <div className="old--address--page">
                <Header title="آدرس" backLink="" backtext="خانه" />
                <div id="old--address-scroller-container">
                    <div id="old--address-scroller-container-cards">
                        <Container className="m-0">
                            <Row className="d-flex flex-column" >
                                <Col>
                                    <Card className="m-auto mt-4 bg-white old--address-card border-0 lh-lg pb-2" >
                                        <Card.Body className="p-0 pe-2 py-2 text-gray">
                                            <Row className="pe-2">
                                                <Row className="mt-2 d-flex flex-nowrap align-items-center">
                                                    <Col className="col-10">
                                                        <Card.Text>
                                                            امیریه 31 آراسته 1 مجت سهند
                                                        </Card.Text>
                                                    </Col>
                                                    <Col className="ps-0 me-1 col-auto d-flex justify-content-end">
                                                        <Card.Link>
                                                            <img src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="m-auto mt-4 bg-white old--address-card border-0 lh-lg pb-2" >
                                        <Card.Body className="p-0 pe-2 py-2 text-gray">
                                            <Row className="pe-2">
                                                <Row className="mt-2 d-flex flex-nowrap align-items-center">
                                                    <Col className="col-10">
                                                        <Card.Text>
                                                            کلاهدوز 4 کوچه اول سمت راست پلاک 50
                                                        </Card.Text>
                                                    </Col>
                                                    <Col className="ps-0 me-1 col-auto d-flex justify-content-end">
                                                        <Card.Link>
                                                            <img src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="m-auto mt-4 bg-white old--address-card border-0 lh-lg pb-2" >
                                        <Card.Body className="p-0 pe-2 py-2 text-gray">
                                            <Row className="pe-2">
                                                <Row className="mt-2 d-flex flex-nowrap align-items-center">
                                                    <Col className="col-10">
                                                        <Card.Text>
                                                            دندان پزشکان 9 دادگر 11 انتهای کوچه چپ پلاک 20 طبقه اول
                                                        </Card.Text>
                                                    </Col>
                                                    <Col className="ps-0 me-1 col-auto d-flex justify-content-end">
                                                        <Card.Link>
                                                            <img src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="m-auto mt-4 bg-white old--address-card border-0 lh-lg pb-2" >
                                        <Card.Body className="p-0 pe-2 py-2 text-gray">
                                            <Row className="pe-2">
                                                <Row className="mt-2 d-flex flex-nowrap align-items-center">
                                                    <Col className="col-10">
                                                        <Card.Text>
                                                            امیریه 31 آراسته 1 مجت سهند
                                                        </Card.Text>
                                                    </Col>
                                                    <Col className="ps-0 me-1 col-auto d-flex justify-content-end">
                                                        <Card.Link>
                                                            <img src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="m-auto mt-4 bg-white old--address-card border-0 lh-lg pb-2" >
                                        <Card.Body className="p-0 pe-2 py-2 text-gray">
                                            <Row className="pe-2">
                                                <Row className="mt-2 d-flex flex-nowrap align-items-center">
                                                    <Col className="col-10">
                                                        <Card.Text>
                                                            کلاهدوز 4 کوچه اول سمت راست پلاک 50
                                                        </Card.Text>
                                                    </Col>
                                                    <Col className="ps-0 me-1 col-auto d-flex justify-content-end">
                                                        <Card.Link>
                                                            <img src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="m-auto mt-4 bg-white old--address-card border-0 lh-lg pb-2" >
                                        <Card.Body className="p-0 pe-2 py-2 text-gray">
                                            <Row className="pe-2">
                                                <Row className="mt-2 d-flex flex-nowrap align-items-center">
                                                    <Col className="col-10">
                                                        <Card.Text>
                                                            دندان پزشکان 9 دادگر 11 انتهای کوچه چپ پلاک 20 طبقه اول
                                                        </Card.Text>
                                                    </Col>
                                                    <Col className="ps-0 me-1 col-auto d-flex justify-content-end">
                                                        <Card.Link>
                                                            <img src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="m-auto mt-4 bg-white old--address-card border-0 lh-lg pb-2" >
                                        <Card.Body className="p-0 pe-2 py-2 text-gray">
                                            <Row className="pe-2">
                                                <Row className="mt-2 d-flex flex-nowrap align-items-center">
                                                    <Col className="col-10">
                                                        <Card.Text>
                                                            امیریه 31 آراسته 1 مجت سهند
                                                        </Card.Text>
                                                    </Col>
                                                    <Col className="ps-0 me-1 col-auto d-flex justify-content-end">
                                                        <Card.Link>
                                                            <img src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="m-auto mt-4 bg-white old--address-card border-0 lh-lg pb-2" >
                                        <Card.Body className="p-0 pe-2 py-2 text-gray">
                                            <Row className="pe-2">
                                                <Row className="mt-2 d-flex flex-nowrap align-items-center">
                                                    <Col className="col-10">
                                                        <Card.Text>
                                                            کلاهدوز 4 کوچه اول سمت راست پلاک 50
                                                        </Card.Text>
                                                    </Col>
                                                    <Col className="ps-0 me-1 col-auto d-flex justify-content-end">
                                                        <Card.Link>
                                                            <img src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="m-auto mt-4 bg-white old--address-card border-0 lh-lg pb-2" >
                                        <Card.Body className="p-0 pe-2 py-2 text-gray">
                                            <Row className="pe-2">
                                                <Row className="mt-2 d-flex flex-nowrap align-items-center">
                                                    <Col className="col-10">
                                                        <Card.Text>
                                                            دندان پزشکان 9 دادگر 11 انتهای کوچه چپ پلاک 20 طبقه اول
                                                        </Card.Text>
                                                    </Col>
                                                    <Col className="ps-0 me-1 col-auto d-flex justify-content-end">
                                                        <Card.Link>
                                                            <img src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>
                <Container fluid className="m-0 d-flex flex-column ms-0 align-items-center justify-content-end main-add-address ">
                    <Row className="m-0 mb-2 ">
                        <Col className="col-12 px-0">
                            <Button className=" d-flex flex-row justify-content-center align-items-center btn--checkout--order btn--red--two">
                                <img className="mx-2" src={addIcon} height="25px" alt="edit-icon" /><span className="mx-3 ">آدرس جدید</span>
                            </Button>
                        </Col>
                    </Row>
                    <Row className="m-0 mb-2 w-100  ">
                        <Col className="col-12 px-0">
                            <Button className="col-12 py-3 d-flex flex-row justify-content-between align-items-center btn--add--new--address btn--red--one">
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