import React from 'react';
import { Navbar , Nav } from 'react-bootstrap';

//icons
import backIcon from './../../assets/images/order/back-page.svg'


export const Header = () => {
    return(
        <>
        <Navbar sticky="top" className="py-2 my-nav" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="align-items-end w-100">
                    
                    <Nav.Link href="/main" className="me-auto ps-4">خانه<img src={backIcon} height="30px" alt="back-icon" /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}