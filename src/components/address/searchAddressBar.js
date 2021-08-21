import React from 'react'
import { Modal, Nav, Navbar, Form, Image, Col, Row, Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';


// Actions
import { addressActions } from '../../actions/addressActions';

// Icons
import backIcon from '../../assets/images/factor/back-page-white.svg'
import searchIcon from "../../assets/images/address/search.svg";


export const SearchAddressBar = (props) => {

    const dispatch = useDispatch();
    const searchedAdrs = useSelector(state => state.searchAddress.searchAddress)

    const searchAddress = (e) => {
        props.setItem(e.target.value)
        dispatch(addressActions.searchAddress(e.target.value))
    }

    return (
        <Modal
            {...props}
            dialogClassName="modal-90w"
            className=" me-4 search-address-bar"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header className="header p-0 py-2">
                <Nav className="d-flex align-items-center justify-content-around w-100">
                    <Navbar.Text className="me-auto ps-5"></Navbar.Text>
                    <Navbar.Text className="fs-6 text-light pe-4">جستجو آدرس</Navbar.Text>
                    <Navbar.Text className="me-auto ps-3 d-flex justify-content-center align-items-center" onClick={() => props.onHide(false)}><span className="text-light nav--link--header--back">آدرس</span><img src={backIcon} height="30px" alt="back-icon" /></Navbar.Text>
                </Nav>
            </Modal.Header>
            <Form.Group controlId="family" className="justify-content-center align-items-center  position-relative m-2">
                <Image src={searchIcon} height="10px" alt="loction_icon" className="map--search--icon my-1" />
                <Form.Control autocomplete="off" className="h-100 map--search--input my-1" type="text" placeholder="محل مورد نظرتان کجاست؟" onChange={searchAddress} value={props.selectedItem}
                />
            </Form.Group>
            <Modal.Body>
                {searchedAdrs
                    ? searchedAdrs.items.map((item, index) => {
                        return (
                            (
                                <Col key={index}>
                                    {index ? <Dropdown.Divider /> : null}
                                    <Dropdown.Item onClick={() => { props.setItem(item.title); props.setItemLocation({ lat: item.location.y, lng: item.location.x }); props.onHide(false); }}>
                                        <Row className="mx-2 d-flex flex-column">
                                            <Col className="text-end basket-dropdown-border-left pe-1">
                                                {item.title}
                                            </Col>
                                            <Col className="text-end basket-dropdown-border-left pe-1">
                                                {item.address}
                                            </Col>
                                        </Row>
                                    </Dropdown.Item>
                                </Col>

                            ))
                    })
                    : null
                }
            </Modal.Body>
        </Modal>
    )
}
