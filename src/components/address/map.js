import React, { useState, useRef, useEffect } from 'react';
import NeshanMap from 'react-neshan-map-leaflet'

import markericon from "../../assets/images/address/destination.svg";
import searchIcon from "../../assets/images/address/search.svg";
import loctionicon from "../../assets/images/address/loction.svg";
import { Button, FormControl, InputGroup, Col, Row, Form, Image, Dropdown } from 'react-bootstrap';
import { LoaderRed } from '../base/loader-bg-red'
import "../../assets/styles/leaflet.css"
import { useDispatch, useSelector } from 'react-redux';
import { addressActions } from '../../actions/addressActions';


// YOUR_API_KEY_GOES_BELOW
const API_KEY = "web.nRDwOvUSAb8WPJZKaJUgdLnXK4MxFukGcw0TieG2";

export const Map = ({ setAddress }) => {

    const [dimStatus, setDimStatus] = useState(false)
    const [selectedItem, setItem] = useState("")
    const searchedAdrs = useSelector(state => state.searchAddress.searchAddress)

    const [position, setPosition] = useState({ lat: 36.297920, lng: 59.605933 })
    const [mapPropeties, setMapPropeties] = useState()
    const [alerts, setAlert] = useState({});
    const target = useRef();
    const ZOME_LEVEL = 13;

    const dispatch = useDispatch()

    let alertHandler = (txt, status, loader) => {
        setAlert({ text: txt, status: status, loader: loader })
    }

    let locateUserHandler = () => {
        // Call mapPropeties.locate() for find Usre Location 
        mapPropeties.myMap?.locate();
        alertHandler("در حال دریافت موقعیت...", true, true);

        // ON locationfound set Userlocate state of latlng result
        mapPropeties.myMap.on('locationfound', e => {

            alertHandler("موقعیت شما یافت شد", true, false);
            setTimeout(() => {
                setAlert(null);
            }, 3000)

            setAddress((prevState) => ({ ...prevState, lat: e.latlng.lat, lng: e.latlng.lng }))
            mapPropeties.myMap.flyTo(e.latlng, ZOME_LEVEL)
            mapPropeties.marker.setLatLng(e.latlng);

        });

        // ON locationerror set Userlocate state of null
        mapPropeties.myMap?.on('locationerror', e => {
            alertHandler("خطا در دریافت موقعیت شما!", true, false);
            setTimeout(() => {
                setAlert(null);
            }, 3000)
        });
    }

    const searchAddress = (e) => {
        setItem(e.target.value)
        dispatch(addressActions.searchAddress(e.target.value))
        console.log(searchedAdrs)
    }

    useEffect(() => {
        console.log(searchedAdrs)
        console.log(selectedItem)
    }, [selectItem, searchedAdrs])

    return (
        <>
                <NeshanMap
                    options={{
                        key: API_KEY,
                        center: position,
                        maptype: 'dreamy-gold',
                        zoom: ZOME_LEVEL
                    }}
                    onInit={(L, myMap) => {
                        let myIcon = L.icon({
                            iconUrl: markericon,
                            iconSize: [80, 90]
                        });
                        let marker = L.marker(position, { icon: myIcon })
                            .addTo(myMap);

                        setMapPropeties({ myMap, marker })

                        myMap.on('click', function (e) {
                            marker.setLatLng(e.latlng)
                            setAddress((prevState) => ({ ...prevState, lat: e.latlng.lat, lng: e.latlng.lng }))

                        });
                    }}
                />
                <Col className="justify-content-center map--search--col">
                    <Dropdown onToggle={(e) => setDimStatus(!dimStatus)} onClick={(e) => searchAddress(e)}>
                        <Row className="w-100 justify-content-center inputs">
                            <Col xs={12} className="justify-content-center pe-3 ps-0">
                                <Form.Group controlId="family" className="justify-content-center align-items-center map--search--group">
                                    <Dropdown.Toggle className="d-flex">
                                        <Form.Group controlId="family" className="justify-content-center align-items-center map--search--group">
                                        <Image src={searchIcon} height="30px" alt="loction_icon" className="map--search--icon mt-2" />
                                        <Form.Control autocomplete="off" className="h-100 map--search--input" type="text" placeholder="محل مورد نظرتان کجاست؟" onChange={searchAddress} value={selectedItem}
                                        />
                                        </Form.Group>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu  className={`w-75 ${dimStatus ? "dim" : ""} dropdown--address--Menu `} styles={{transform: "translate3d(42px, 58px, 0px)"}}>
                                            {searchedAdrs
                                                ? searchedAdrs.items.map((item, index) => {
                                                    return (
                                                        (
                                                            <Col key={index}>
                                                                {index ? <Dropdown.Divider /> : null}
                                                                <Dropdown.Item onClick={() => setItem(item.title)}>
                                                                    <Row>
                                                                        <Col className="text-end basket-dropdown-border-left pe-1">{item.title}</Col>
                                                                        <Col>{item.address}</Col>
                                                                    </Row>
                                                                </Dropdown.Item>
                                                            </Col>
                                                        ))
                                                })
                                                : null
                                            }
                                    </Dropdown.Menu>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                    </Dropdown>
                </Col>
                <div>
                    <Button ref={target} className="btn btn-danger border-0  icon--location--detection" onClick={locateUserHandler}>
                        < img src={loctionicon} height="25px" alt="loction_icon" />
                    </Button>
                </div>
                <div className="w-100 tooltip--location--detection" style={{ display: alerts?.status ? "flex" : "none" }}>
                    {
                        alerts?.loader ? <LoaderRed /> : null
                    }
                    {alerts?.text}
                </div>


        </>
    )
}
