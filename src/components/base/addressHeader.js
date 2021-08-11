import React from 'react';
import { Navbar, Nav, Col } from 'react-bootstrap';

import backIcon from '../../assets/images/factor/back-page-white.svg'
import { LoaderAddress } from './loaderAddress'

export const Header = ({ title, backLink, backtext, locating }) => {
    return (
        <>
            <Navbar variant="dark" sticky="top" className="py-2 navbar--factor" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-center justify-content-between w-100">
                        <Col className="d-flex align-items-center justify-content-start w-100 ">
                            <Navbar.Text className="m-0 me-1 pe-3">{locating ? <LoaderAddress /> : null}</Navbar.Text>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center w-100">
                            <Navbar.Text className="fs-6 text-light">{title}</Navbar.Text>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-between w-100">
                            <Nav.Link href={backLink} className="me-auto ps-3 d-flex justify-content-end align-items-center"><span className="text-light nav--link--header--back">{backtext}</span><img src={backIcon} height="30px" alt="back-icon" /></Nav.Link>
                        </Col>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}