import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import Sidebar from 'react-sidebar'
import { history } from '../../helpers';

//icons
import menuIcon from './../../assets/images/base/menu.svg'
import logo from './../../assets/images/base/happy-pizza.png'
import addIcon from './../../assets/images/main/add.svg'
import waitingIcon from './../../assets/images/main/waiting.svg'
import peymentIcon from './../../assets/images/main/peyment.svg'
import deliveryIcon from './../../assets/images/main/delivery.svg'
import coookingIcon from './../../assets/images/main/coooking.svg'
import chefIcon from './../../assets/images/main/chef.svg'
import waitingdoneIcon from './../../assets/images/main/waitingdone.svg'
import deliverydoneIcon from './../../assets/images/main/deliverydone.svg'
import coookingdoneIcon from './../../assets/images/main/coookingdone.svg'
import chefdoneIcon from './../../assets/images/main/chefdone.svg'
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../actions/orderAction';
import { InLineOrder } from './inLineOrder';





export const InLineOrders = () => {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const inLineOrders = useSelector(state => state.getInLineOrders.orders)
    
    useEffect(() => {
        dispatch(orderAction.getInLineOrders())
    }, [dispatch])

    return (
        <>
            {
                inLineOrders &&
                inLineOrders.map(order => 
                    <InLineOrder order={order}/>
                )
            }
                               
                                {/* <Card className="mt-4 main-card-order border-0">
                                    <Card.Body className="main-card-order p-1 bg-white">
                                        <Row className="px-1 " >
                                            <Col className="d-flex p-2 mx-2 align-items-center justify-content-start flex-row">

                                                <div className="main-icon-cards ms-2 border border-1 border-dark">
                                                    <img className="img-fluid" src={deliveryIcon} height="35px" alt="deliveryIcon" />
                                                </div>
                                                <div className=" main-icon-cards ms-2 border border-1 border-dark">
                                                    <img className="img-fluid" src={coookingIcon} height="35px" alt="coookingIcon" />
                                                </div>
                                                <div className=" main-icon-cards ms-2 border border-1 border-dark">
                                                    <img className="img-fluid" src={chefIcon} height="35px" alt="chefIcon" />
                                                </div>
                                                <p className="me-auto ms-1 main-text-card-queue-condition fw-bold">در صف انتظار</p>

                                                <div className="main-icon-cards main-icon-cards-pass ms-1">
                                                    <img className="img-fluid" src={waitingdoneIcon} alt="deliveryIcon" />
                                                </div>
                                                <div className="main-icon-cards main-icon-cards-pass me-1">
                                                    <img className="img-fluid" src={peymentIcon} alt="deliveryIcon" />
                                                </div>

                                            </Col>
                                        </Row>
                                        <Row className="d-flex flex-column mx-2 mt-2">
                                            <Col className="p-0 py-2">
                                                <span className="ps-2 ">یکشنبه</span>
                                                <span className="ps-2 "> 3 مرداد</span>
                                                <span className="ps-2 ">12:15</span>
                                            </Col>
                                            <Col className="p-0 py-2">
                                                <p className="main-text-card-description-order fw-bold">
                                                 سفارش شما در صف انتظار برای آماده سازی آشپز است.</p>
                                            </Col>
                                        </Row>
                                        <Row className="mx-1 g-0">
                                            <Col>
                                                <Button className="col-12 d-flex flex-row justify-content-between align-items-center main-card-btn-order-detail btn--red--one">
                                                    <span className="pe-2">جزییات سفارش</span>
                                                    <span className="ps-2"> 230 تومان</span>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card className="mt-4 main-card-order border-0">
                                    <Card.Body className="main-card-order p-1 bg-white">
                                        <Row className="px-1 " >
                                            <Col className="d-flex p-2 mx-2 align-items-center justify-content-start flex-row">

                                                <div className="main-icon-cards ms-2 border border-1 border-dark">
                                                    <img className="img-fluid" src={deliveryIcon} height="35px" alt="deliveryIcon" />
                                                </div>
                                                <div className=" main-icon-cards ms-2 border border-1 border-dark ">
                                                    <img className="img-fluid" src={coookingIcon} height="35px" alt="coookingIcon" />
                                                </div>

                                                <p className="display-6 me-auto ms-1 main-text-card-queue-condition fw-bold">در حال آماده سازی</p>

                                                <div className=" main-icon-cards main-icon-cards-pass ">
                                                    <img className="img-fluid" src={chefdoneIcon} height="35px" alt="chefIcon" />
                                                </div>
                                                <div className="main-icon-cards main-icon-cards-pass">
                                                    <img className="img-fluid" src={waitingdoneIcon} alt="deliveryIcon" />
                                                </div>
                                                <div className="main-icon-cards main-icon-cards-pass me-1">
                                                    <img className="img-fluid" src={peymentIcon} alt="deliveryIcon" />
                                                </div>

                                            </Col>
                                        </Row>
                                        <Row className="d-flex flex-column mx-2 mt-2">
                                            <Col className="p-0 py-2">
                                                <span className="ps-2 ">یکشنبه</span>
                                                <span className="ps-2 "> 3 مرداد</span>
                                                <span className="ps-2 ">12:15</span>
                                            </Col>
                                            <Col className="p-0 py-2">
                                                <p className="main-text-card-description-order fw-bold">
                                                سفارش شما در حال اماده سازی برای پخت است.</p>
                                            </Col>
                                        </Row>
                                        <Row className="mx-1 g-0">
                                            <Col>
                                                <Button className="col-12 d-flex flex-row justify-content-between align-items-center main-card-btn-order-detail btn--red--one">
                                                    <span className="pe-2">جزییات سفارش</span>
                                                    <span className="ps-2"> 230 تومان</span>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card className="mt-4 main-card-order border-0">
                                    <Card.Body className="main-card-order p-1 bg-white">
                                        <Row className="px-1 " >
                                            <Col className="d-flex p-2 mx-2 align-items-center justify-content-start flex-row">

                                                <div className="main-icon-cards ms-2 border border-1 border-dark">
                                                    <img className="img-fluid" src={deliveryIcon} height="35px" alt="deliveryIcon" />
                                                </div>

                                                <p className="me-auto ms-1 main-text-card-queue-condition fw-bold">در حال پخت</p>

                                                <div className=" main-icon-cards main-icon-cards-pass ">
                                                    <img className="img-fluid" src={coookingdoneIcon} height="35px" alt="coookingIcon" />
                                                </div>

                                                <div className=" main-icon-cards main-icon-cards-pass">
                                                    <img className="img-fluid" src={chefdoneIcon} height="35px" alt="chefIcon" />
                                                </div>
                                                <div className="main-icon-cards main-icon-cards-pass">
                                                    <img className="img-fluid" src={waitingdoneIcon} alt="deliveryIcon" />
                                                </div>
                                                <div className="main-icon-cards main-icon-cards-pass me-1">
                                                    <img className="img-fluid" src={peymentIcon} alt="deliveryIcon" />
                                                </div>

                                            </Col>
                                        </Row>
                                        <Row className="d-flex flex-column mx-2 mt-2">
                                            <Col className="p-0 py-2">
                                                <span className="ps-2 ">یکشنبه</span>
                                                <span className="ps-2 "> 3 مرداد</span>
                                                <span className="ps-2 ">12:15</span>
                                            </Col>
                                            <Col className="p-0 py-2">
                                                <p className="main-text-card-description-order fw-bold">
                                                سفارش شما در حال پخت می باشد و بزودی ارسال خواهد گردید.
                                                    </p>
                                            </Col>
                                        </Row>
                                        <Row className="mx-1 g-0">
                                            <Col>
                                                <Button className="col-12 d-flex flex-row justify-content-between align-items-center main-card-btn-order-detail btn--red--one">
                                                    <span className="pe-2">جزییات سفارش</span>
                                                    <span className="ps-2"> 230 تومان</span>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card className="mt-4 main-card-order border-0">
                                    <Card.Body className="main-card-order p-1 bg-white">
                                        <Row className="px-1 " >
                                            <Col className="d-flex p-2 mx-2 align-items-center justify-content-start flex-row">

                                                <p className="ms-auto main-text-card-queue-condition fw-bold text-center">در حال ارسال</p>

                                                <div className="main-icon-cards main-icon-cards-pass">
                                                    <img className="img-fluid" src={deliverydoneIcon} height="35px" alt="deliveryIcon" />
                                                </div>

                                                <div className="main-icon-cards main-icon-cards-pass ">
                                                    <img className="img-fluid" src={coookingdoneIcon} height="35px" alt="coookingIcon" />
                                                </div>

                                                <div className="main-icon-cards main-icon-cards-pass">
                                                    <img className="img-fluid" src={chefdoneIcon} height="35px" alt="chefIcon" />
                                                </div>
                                                <div className="main-icon-cards main-icon-cards-pass">
                                                    <img className="img-fluid" src={waitingdoneIcon} alt="deliveryIcon" />
                                                </div>
                                                <div className="main-icon-cards main-icon-cards-pass me-1">
                                                    <img className="img-fluid" src={peymentIcon} alt="deliveryIcon" />
                                                </div>

                                            </Col>
                                        </Row>
                                        <Row className="d-flex flex-column mx-2 mt-2">
                                            <Col className="p-0 py-2">
                                                <span className="ps-2 ">یکشنبه</span>
                                                <span className="ps-2 "> 3 مرداد</span>
                                                <span className="ps-2 ">12:15</span>
                                            </Col>
                                            <Col className="p-0 py-2">
                                                <p className="main-text-card-description-order fw-bold">
                                                سفارش شما بزودی به دستتان خواهد رسید.
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row className="mx-1 g-0">
                                            <Col>
                                                <Button className="col-12 d-flex flex-row justify-content-between align-items-center main-card-btn-order-detail btn--red--one">
                                                    <span className="pe-2">جزییات سفارش</span>
                                                    <span className="ps-2"> 230 تومان</span>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card> */}
        </>
    )
}