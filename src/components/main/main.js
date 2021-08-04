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


//components 
import { InLineOrders } from './inLineOrders';
import { Charge } from './charge';





export const Main = () => {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <Sidebar
                // sidebar={}
                open={isOpen}
                onSetOpen={setIsOpen}
                pullRight={true}
                styles={{
                    sidebar: { background: "white", width: "42vw", "zIndex": "1040" },
                    overlay: { zIndex: "1030" }
                }}
                overlayClassName="test3"
                shadow={true}
                touch={false}
            >
                <div className="form-page">

                    <Charge />
                    <div id="back-up"></div>
                    <div id="back-center" className="back-center-main">

                        <div className="main-scroll-card-order">
                            <Container className="mb-auto mt-5 d-flex flex-column">
                                <InLineOrders />
                            </Container>
                        </div>
                    </div>
                    <Container fluid className="p-0 d-flex flex-column ms-0 align-items-around">
                        <Row className="mb-4 pe-3 mt-0 ms-0">
                            <Col xs={9}>
                                <img className="logo" src={logo} alt="logo" width="190px" />
                            </Col>
                            <Col xs={3} className="mt-2 me-3" onClick={() => setIsOpen(!isOpen)}>
                                <img src={menuIcon} height="34px" alt="menu-icon" className="mt-2" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center ">
                                <Button type="button" className="main-add-btn border-0 p-2 mt-4" onClick={() => history.push('/address')}>
                                    <img src={addIcon} height="40px" alt="menu-icon" />
                                </Button>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </Sidebar>
        </>
    )
}