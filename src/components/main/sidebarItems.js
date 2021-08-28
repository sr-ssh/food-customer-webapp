import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import HappyPizzaLogo from '../../assets/images/base/happy-pizza.svg'
import accountIcon from '../../assets/images/drawer/account.svg'
import exitIcon from '../../assets/images/drawer/exit.svg'
import callIcon from '../../assets/images/drawer/call.svg'



export const SidebarItems = ({ setLogOutModal, setIsOpen }) => {

    return (
        <Container fluid className="d-flex flex-column h-100">
            <Row className="my-2">
                <Col xs={10} sm={10} md={10} lg={10} className="py-3 mx-auto fw-bold sidebarItem px-0">
                    <img src={HappyPizzaLogo} height="55px" className="m-auto  d-block pt-2 img-fluid " alt="logo" />
                </Col>
            </Row>
            <Row>
                <Col xs={10} sm={10} md={10} lg={10} className="py-3 mx-auto fw-bold sidebarItem" style={{ padding: '0', whiteSpace: 'nowrap' }}>
                    <Link to="/order/history">تاریخچه سفارشات</Link>
                </Col>
            </Row>

            <Row className=" mt-auto">
                <Row className="m-0 p-0 mx-auto ">
                    <a href="tel:+62896706255135" className="link--call-sidebar px-1">
                        <Col className="d-flex align-items-center justify-content-center px-0 my-3" >
                            <img className="m-0 d-block call--icon--sidebar" src={callIcon} height="30px" alt="call-icon" />
                            <span className="fw-bold">تماس با پشتیبانی</span>
                        </Col>
                    </a>
                </Row>


                <Row className="m-0 p-0 d-flex justify-content-center align-items-center mt-auto dashboardIcons">
                    <Col className="my-3 col-5">
                        <Col onClick={() => { setLogOutModal(true); setIsOpen(false) }}>
                            <img className="m-auto d-block" src={exitIcon} height="40px" alt="exit-icon" />

                        </Col>
                    </Col>
                    {/* <Col className="my-3 col-5">
                        <Link to="/account"><img className="m-auto d-block" src={accountIcon} height="40px" alt="acount-icon" /></Link>
                    </Col> */}
                </Row>
            </Row>
        </Container >
    )
}
