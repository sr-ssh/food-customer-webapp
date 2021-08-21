import React from 'react'
import { Modal, Nav, Navbar, Form, Image, Col, Row, Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

// Components
import { LoaderWhite } from '../base/loader-bg-white'

// Actions
import { addressActions } from '../../actions/addressActions';

// Icons
import backIcon from '../../assets/images/factor/back-page-white.svg'
import searchIcon from "../../assets/images/address/search.svg";
import markerIcon from "../../assets/images/address/marker.svg";
import deleteIcon from "../../assets/images/factor/delete.svg";



export const SearchAddressBar = (props) => {

    const dispatch = useDispatch();
    let searchedAdrs = useSelector(state => state.searchAddress.searchAddress)
    let searchedAdrssLoading = useSelector(state => state.searchAddress.loading)

    const searchAddress = (e) => {
        props.setItem(e.target.value)
        dispatch(addressActions.searchAddress({ term: e.target.value, ...props.itemLocation }))
    }
    const searchAddressClear = () => {
        props.setItem("")
        dispatch(addressActions.searchAddressClear())

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
                <Form.Control autocomplete="off" className="h-100 map--search--input--dropdown my-1" type="text" placeholder="محل مورد نظرتان کجاست؟" onChange={searchAddress} value={props.selectedItem}
                />
                <Image src={deleteIcon} height="5px" alt="loction_icon" className="map--search--icon-delete my-1" onClick={searchAddressClear} />
            </Form.Group>
            <Modal.Body>
                {
                    searchedAdrssLoading ?
                        <Col className="d-flex justify-content-center align-items-center mt-4">
                            <LoaderWhite />
                        </Col>
                        :
                        searchedAdrs
                            ? searchedAdrs.items?.map((item, index) => {
                                let subtext;
                                if (item.address && item.neighbourhood)
                                    subtext = `${item.address}(${item.neighbourhood})`
                                else
                                    subtext = `${item.region.substr(item.region.indexOf("،") + 1)} ، ${item.region.split('،', 1)}`
                                return (
                                    (
                                        <Col key={index}>
                                            {index ? <Dropdown.Divider className="divider--result-search--address" /> : null}
                                            <Dropdown.Item className="pe-0 d-flex flex-row" onClick={() => { props.setItem(item.title); props.setItemLocation({ lat: item.location.y, lng: item.location.x }); props.onHide(false); }}>
                                                <Row className="m-0 p-0 px-2 d-flex align-items-center flex-column">
                                                    <Col className="m-0 p-0 text-end basket-dropdown-border-left">
                                                        <img src={markerIcon} height="18px" />
                                                    </Col>
                                                </Row>
                                                <Row className="mx-2 d-flex flex-column">
                                                    <Col className="text-end basket-dropdown-border-left pe-1 fw-bold">
                                                        {item.title}
                                                    </Col>
                                                    <Col className="text-end basket-dropdown-border-left text--result-search--address pe-1  mt-2">
                                                        {subtext}
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
