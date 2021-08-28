import React, { useState, useRef, useEffect } from 'react';
import NeshanMap from 'react-neshan-map-leaflet'

import markericon from "../../assets/images/address/marker.svg";
import searchIcon from "../../assets/images/address/search.svg";
import loctionicon from "../../assets/images/address/loction.svg";


import { Button, Col, Form, Image, Dropdown } from 'react-bootstrap';
import "../../assets/styles/leaflet.css"
import { useDispatch } from 'react-redux';
import { SearchAddressBar } from './searchAddressBar'


// YOUR_API_KEY_GOES_BELOW
const API_KEY = "web.nRDwOvUSAb8WPJZKaJUgdLnXK4MxFukGcw0TieG2";

export const Map = (props) => {

    let { setloaderLocate, setAddress, setItem, selectedItem, itemLocation, setItemLocation } = props;
    const [dimStatus, setDimStatus] = useState(false)
    const [showAddressBar, setShowAddressbar] = useState(false);
    const [mapPropeties, setMapPropeties] = useState()
    const target = useRef();
    const ZOME_LEVEL = 13;
    const ZOME_LEVEL2 = 17;
    const dispatch = useDispatch()


    let locateUserHandler = () => {

        // Call mapPropeties.locate() for find Usre Location 
        mapPropeties.myMap?.locate({ setView: true });
        setloaderLocate(true)

    }

    let recordLocation = () => {
        setAddress((prevState) => ({ ...prevState, lat: mapPropeties?.myMap.getCenter().lat, lng: mapPropeties?.myMap.getCenter().lng }))
        setItemLocation({ lat: mapPropeties?.myMap.getCenter().lat, lng: mapPropeties?.myMap.getCenter().lng })
        props.hide(false)

    }

    useEffect(() => {
        mapPropeties?.myMap.flyTo(itemLocation, ZOME_LEVEL2)
        mapPropeties?.marker.setLatLng(itemLocation);
    }, [itemLocation])

    return (
        <>
            <Col className="px-2 map--search--col ">
                <Dropdown onToggle={(e) => setDimStatus(!dimStatus)} className="">
                    <Form.Group controlId="family" className="justify-content-center align-items-center map--search--group">
                        <Dropdown.Toggle className="d-flex w-100 px-0" onClick={() => setShowAddressbar(true)}>
                            <Form.Group controlId="family" className="justify-content-center align-items-center map--search--group position-relative">
                                <Image src={searchIcon} height="10px" alt="loction_icon" className="map--search--icon" />
                                <Form.Control autocomplete="off" className="h-100 map--search--input" type="text" placeholder="محل مورد نظرتان کجاست؟" value={selectedItem} />
                            </Form.Group>
                        </Dropdown.Toggle>
                    </Form.Group>
                </Dropdown>
            </Col>
            <NeshanMap
                options={{
                    key: API_KEY,
                    center: itemLocation,
                    maptype: 'dreamy-gold',
                    zoom: ZOME_LEVEL
                }}
                onInit={(L, myMap) => {
                    let myIcon = L.icon({
                        iconUrl: markericon,
                        iconSize: [60, 75],
                        zIndexOffset: 1000
                    });
                    let marker = L.marker(itemLocation, { icon: myIcon })
                        .addTo(myMap);

                    // ON locationfound set Userlocate state of latlng result
                    myMap.on('locationfound', e => {
                        // setLocating(false)
                        setAddress((prevState) => ({ ...prevState, lat: e.latlng.lat, lng: e.latlng.lng }))
                        myMap.flyTo(e.latlng, 18)
                        marker.setLatLng(e.latlng);
                        setloaderLocate(false)
                    });

                    // ON locationerror set Userlocate state of null
                    myMap.on('locationerror', e => {
                        setloaderLocate(false)
                        console.log(e);
                    });

                    myMap.on('move', function (e) {
                        marker.setLatLng(e.target.getCenter());
                    })

                    setMapPropeties({ myMap, marker })
                }}
            />
            <div>
                <div>
                    <Button ref={target} className="btn btn-danger border-0  icon--location--detection me-3" onClick={locateUserHandler}>
                        < img src={loctionicon} className="img-fluid" alt="loction_icon" />
                    </Button>
                </div>
                <div className="div--btn-recordLocation">
                    <Button ref={target} className="btn btn-danger border-0  icon--location--detection--record mx-4" onClick={() => recordLocation()}>
                        <span className="me-1">تایید موقعیت</span>
                    </Button>
                </div>
            </div>
            <SearchAddressBar show={showAddressBar} onHide={() => { setShowAddressbar(false) }} setItem={setItem} selectedItem={selectedItem} itemLocation={itemLocation} setItemLocation={setItemLocation} />
        </>
    )
}
