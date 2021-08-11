import React, { useState } from 'react';
import { Container, Button, Row, Col, Alert } from 'react-bootstrap';
import Sidebar from 'react-sidebar'
import { history } from '../../helpers';
import { useSelector } from 'react-redux';


//icons
import menuIcon from './../../assets/images/base/menu.svg'
import logo from './../../assets/images/base/happy-pizza.png'
import addIcon from './../../assets/images/main/add.svg'

//components 
import { SidebarItems } from './sidebarItems'
import { InLineOrders } from './inLineOrders';
import { Charge } from './charge';





export const Main = () => {

    const [isOpen, setIsOpen] = useState(false)
    let alertMessage = useSelector(state => state.alert.message);
    let alerType = useSelector(state => state.alert.type);


    return (
        <>
            <Sidebar
                sidebar={<SidebarItems />}
                open={isOpen}
                onSetOpen={setIsOpen}
                pullRight={true}
                styles={{
                    sidebar: { background: "#f8f3ef", width: "42vw", "zIndex": "1040" },
                    overlay: { zIndex: "1030" }
                }}
                overlayClassName="test3"
                shadow={true}
                touch={false}
            >
                <div className="form-page">
                    {
                        alerType === 'success' ?
                            alertMessage &&
                            <>
                                <Row className="justify-content-center text-center ">
                                    <Alert variant={alerType}>
                                        {alertMessage}
                                    </Alert>
                                </Row>
                            </>
                            : null
                    }
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