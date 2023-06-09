import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import backIcon from '../../assets/images/factor/back-page-white.svg'
import { history } from '../../helpers';

export const Header = ({ title, backLink, backtext }) => {
    return (
        <>
            <Navbar variant="dark" sticky="top" className="py-2 navbar--factor" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-center justify-content-around w-100">
                        <Nav.Link className="me-auto ps-5"></Nav.Link>
                        <Navbar.Text className="fs-6 text-light pe-4">{title}</Navbar.Text>
                        <Navbar.Text onClick={() => history.push(backLink)} className="me-auto ps-3 d-flex justify-content-center align-items-center"><span className="text-light nav--link--header--back">{backtext}</span><img src={backIcon} height="30px" alt="back-icon" /></Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}