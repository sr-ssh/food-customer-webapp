import React from 'react';
import { Navbar , Nav } from 'react-bootstrap';

//icons
import backIcon from './../../assets/images/order/back-page.svg'


export const Header = () => {
    return(
        <>
        <Navbar sticky="top" className="pt-2 my-nav navbar--order m-0 align-items-end" >
            <Navbar.Toggle aria-controls="basic-navbar-nav " />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="align-items-end w-100">
                    <Nav.Link href="/main" className="me-auto ps-41 me-auto--order"><p>خانه</p><img src={backIcon} height="35px" alt="back-icon" /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}