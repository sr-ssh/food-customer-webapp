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





export const InLineOrderHeader = ({order}) => {


    return (
        <>
            <Row className="px-1 " >
                <Col className="d-flex p-2 mx-2 align-items-center justify-content-start flex-row">
                    {
                        order.status.status === 3
                        ? <><p className="ms-auto main-text-card-queue-condition fw-bold text-center">در حال ارسال</p>
                            <div className="main-icon-cards main-icon-cards-pass">
                                <img className="img-fluid" src={deliverydoneIcon} height="35px" alt="deliveryIcon" />
                            </div></>
                        : <div className="main-icon-cards ms-2 border border-1 border-dark">
                            <img className="img-fluid" src={deliveryIcon} height="35px" alt="deliveryIcon" />
                        </div>
                    }
                    {
                        order.status.status === 2 
                        ? <p className="me-auto ms-1 main-text-card-queue-condition fw-bold">در حال پخت</p>
                        : null
                    }
                    {
                        order.status.status === 2 || order.status.status === 3 
                        ? <div className=" main-icon-cards main-icon-cards-pass ">
                            <img className="img-fluid" src={coookingdoneIcon} height="35px" alt="coookingIcon" />
                        </div>
                        : <div className=" main-icon-cards ms-2 border border-1 border-dark">
                            <img className="img-fluid" src={coookingIcon} height="35px" alt="coookingIcon" />
                        </div>
                    }
                    {
                        order.status.status === 5 
                        ?<p className="display-6 me-auto ms-1 main-text-card-queue-condition fw-bold">در حال آماده سازی</p>
                        : null
                    }
                    {
                        order.status.status === 2 || order.status.status === 3 || order.status.status === 5 
                        ? <div className=" main-icon-cards main-icon-cards-pass ">
                            <img className="img-fluid" src={chefdoneIcon} height="35px" alt="chefIcon" />
                        </div>
                        : <div className=" main-icon-cards ms-2 border border-1 border-dark">
                            <img className="img-fluid" src={chefIcon} height="35px" alt="chefIcon" />
                        </div>
                    }
                    {
                        order.paid && order.status.status === 0
                        ?<p className="me-auto ms-1 main-text-card-queue-condition fw-bold">در صف انتظار</p>
                        : null
                    }
                    { 
                        order.status.status === 2 || order.status.status === 3 || order.status.status === 5 || (order.paid && order.status.status === 0)
                        ? <div className="main-icon-cards main-icon-cards-pass ms-1">
                            <img className="img-fluid" src={waitingdoneIcon} alt="deliveryIcon" />
                        </div>
                        : <div className="main-icon-cards ms-2 border border-1 border-dark">
                            <img className="img-fluid" src={waitingIcon} alt="deliveryIcon" />
                        </div>
                    }
                    {
                        (!order.paid) && order.status.status === 0
                        ? <p className="me-auto  main-text-card-queue-condition fw-bold">در انتظار پرداخت</p>
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