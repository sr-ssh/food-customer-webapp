import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import backIcon from '../../assets/images/factor/back-page-white.svg'
import { history } from '../../helpers';

export const Header = ({ title, backLink, state, backtext }) => {
    return (
        <>
            <Navbar variant="dark" sticky="top" className="py-2 navbar--factor" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-center justify-content-around w-100">
                        <Nav.Link className="me-auto ps-5"></Nav.Link>
                        <Navbar.Text className="fs-6 text-light pe-4">{title}</Navbar.Text>
                        <Nav.Link onClick={() => history.push(backLink, {state})} className="me-auto ps-3 d-flex justify-content-center align-items-center"><span className="text-light nav--link--header--back">{backtext}</span><img src={backIcon} height="30px" alt="back-icon" /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}