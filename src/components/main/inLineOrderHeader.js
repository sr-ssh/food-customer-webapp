import React from 'react';
import { Row, Col } from 'react-bootstrap';

//icons
import waitingIcon from './../../assets/images/main/waiting.svg'
import peymentIcon from './../../assets/images/main/peyment.svg'
import deliveryIcon from './../../assets/images/main/delivery.svg'
import coookingIcon from './../../assets/images/main/coooking.svg'
import chefIcon from './../../assets/images/main/chef.svg'
import waitingdoneIcon from './../../assets/images/main/waitingdone.svg'
import deliverydoneIcon from './../../assets/images/main/deliverydone.svg'
import coookingdoneIcon from './../../assets/images/main/coookingdone.svg'
import chefdoneIcon from './../../assets/images/main/chefdone.svg'





export const InLineOrderHeader = ({ order }) => {


    return (
        <>
            <Row className="px-1 " >
                <Col className="d-flex p-2 mx-2 align-items-center justify-content-start flex-row-reverse">
                    {
                        order.status.status === 3
                            ? <><p className="me-auto main-text-card-queue-condition fw-bold text-center ms-2">در حال ارسال</p>
                                <div className="main-icon-cards main-icon-cards-pass">
                                    <img className="img-fluid" src={deliverydoneIcon} height="35px" alt="deliveryIcon" style={{ transform: "scale(-1, 1)" }} />
                                </div></>
                            : <div className="main-icon-cards me-2 border border-1 border-dark">
                                <img className="img-fluid" src={deliveryIcon} height="35px" alt="deliveryIcon" style={{ transform: "scale(-1, 1)" }} />
                            </div>
                    }
                    {
                        order.status.status === 2
                            ? <p className="ms-auto me-1 main-text-card-queue-condition fw-bold">در حال پخت</p>
                            : null
                    }
                    {
                        order.status.status === 2 || order.status.status === 3
                            ? <div className=" main-icon-cards main-icon-cards-pass ">
                                <img className="img-fluid" src={coookingdoneIcon} height="35px" alt="coookingIcon" />
                            </div>
                            : <div className=" main-icon-cards me-2 border border-1 border-dark">
                                <img className="img-fluid" src={coookingIcon} height="35px" alt="coookingIcon" />
                            </div>
                    }
                    {
                        order.status.status === 5
                            ? <p className="display-6 ms-auto me-1 main-text-card-queue-condition fw-bold">در حال آماده سازی</p>
                            : null
                    }
                    {
                        order.status.status === 2 || order.status.status === 3 || order.status.status === 5
                            ? <div className=" main-icon-cards main-icon-cards-pass ">
                                <img className="img-fluid" src={chefdoneIcon} height="35px" alt="chefIcon" />
                            </div>
                            : <div className=" main-icon-cards me-2 border border-1 border-dark">
                                <img className="img-fluid" src={chefIcon} height="35px" alt="chefIcon" />
                            </div>
                    }
                    {
                        order.status.status === 0
                            ? <p className="ms-auto me-1 main-text-card-queue-condition fw-bold">در صف انتظار</p>
                            : null
                    }
                    {
                        order.status.status === 2 || order.status.status === 3 || order.status.status === 5 || order.status.status === 0
                            ? <div className="main-icon-cards main-icon-cards-pass ">
                                <img className="img-fluid" src={waitingdoneIcon} alt="deliveryIcon" />
                            </div>
                            : <div className="main-icon-cards me-2 border border-1 border-dark">
                                <img className="img-fluid" src={waitingIcon} alt="deliveryIcon" />
                            </div>
                    }
                    {
                        order.status.status === 6
                            ? <p className="ms-auto me-1  main-text-card-queue-condition fw-bold">در انتظار پرداخت</p>
                            : null
                    }
                    <div className="main-icon-cards main-icon-cards-pass me-1">
                        <img className="img-fluid" src={peymentIcon} alt="deliveryIcon" />
                    </div>
                </Col>
            </Row>
        </>
    )
}