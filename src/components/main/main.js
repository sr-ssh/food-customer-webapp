import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Sidebar from 'react-sidebar'


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
                <Container fluid className="p-0 d-flex flex-column ms-0">
                <Row className="mb-4 pe-3 mt-0">
                            <Col xs={3} className="me-4 ms-auto">
                                <Button className="main-button me-auto d-block p-2" type="submit" onClick={() => setIsOpen(!isOpen)}>
                                    {/* <img src={menuIcon} height="38px" alt="menu-icon"  /> */}
                                </Button>
                            </Col>
                        </Row>
                </Container>
                
            </div>
            </Sidebar>
        </>
    )
}