import React, { useState } from 'react'
import { Modal, Nav, Navbar, Col } from 'react-bootstrap'

// Components
import { LoaderAddress } from '../base/loaderAddress'
import { Map } from './map'

// Icons
import backIcon from '../../assets/images/factor/back-page-white.svg'


export const Maps = (props) => {

    const [loaderLocate, setloaderLocate] = useState(false)

    return (
        <Modal
            {...props}
            dialogClassName="modal-90w"
            className=" me-4 search-address-bar"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header className="header p-0 py-2">
                <Nav className="d-flex flex-row align-items-center w-100">
                    <Col className="d-flex align-items-center justify-content-start">
                        <Navbar.Text className="ms-auto pe-3">{loaderLocate ? <LoaderAddress /> : null}</Navbar.Text>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Navbar.Text className="fs-6 text-light">نقشه</Navbar.Text>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end">
                        <Navbar.Text className="me-auto ps-3 d-flex justify-content-center align-items-center" onClick={() => props.onHide(false)}><span className="text-light nav--link--header--back">آدرس</span><img src={backIcon} height="30px" alt="back-icon" /></Navbar.Text>
                    </Col>
                </Nav>
            </Modal.Header>
            <Modal.Body className="modal--body--pick--address map">
                <Map setloaderLocate={setloaderLocate} setAddress={props.setAddress} selectedItem={props.selectedItem} setItem={props.setItem} itemLocation={props.itemLocation} setItemLocation={props.setItemLocation} setLocating={props.setLocating} hide={() => props.onHide(false)} />
            </Modal.Body>
        </Modal>
    )
}
