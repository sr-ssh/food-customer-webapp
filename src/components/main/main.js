import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Sidebar from 'react-sidebar'
import { history } from '../../helpers';

//icons
import menuIcon from './../../assets/images/base/menu.svg'
import logo from './../../assets/images/base/happy-pizza.png'
import addIcon from './../../assets/images/main/add.svg'

export const Main = () => {

    const [isOpen, setIsOpen] = useState(false)


    return(
        <>
            <Sidebar
                // sidebar={}
                open={isOpen}
                onSetOpen={setIsOpen}
                pullRight={true}
                styles={{ 
                    sidebar: { background: "white", width : "42vw", "zIndex": "1040" },
                    overlay: { zIndex: "1030"}
                }}
                overlayClassName="test3"
                shadow={true}
                touch={false}
            >
                <div className="form-page">
                <div id="back-up"></div>
                <div id="back-center"></div>
                <div id="back-down"></div>
                <Container fluid className="p-0 d-flex flex-column ms-0 align-items-around">
                    <Row className="mb-4 pe-3 mt-0 ms-0">
                        <Col xs={9}>
                            <img className="logo" src={logo} alt="logo" width="190px"/>
                        </Col>
                        <Col xs={3} className="mt-4 me-3" onClick={() => setIsOpen(!isOpen)}>
                            <img src={menuIcon} height="34px" alt="menu-icon" className="mt-2" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center ms-0">
                        <Col xs={3}>
                            <Button type="button" className="main-add-btn border-0 p-2" onClick={() => history.push('/order')}>
                                <img src={addIcon} height="64px" alt="menu-icon"/>
                            </Button>
                        </Col>
                    </Row>
                </Container>
                
            </div>
            </Sidebar>
        </>
    )
}