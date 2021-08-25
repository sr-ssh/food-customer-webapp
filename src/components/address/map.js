import React, { useState, useRef, useEffect } from 'react';
import NeshanMap from 'react-neshan-map-leaflet'

import markericon from "../../assets/images/address/destination.svg";
import searchIcon from "../../assets/images/address/search.svg";
import loctionicon from "../../assets/images/address/loction.svg";


import { Button, Col, Form, Image, Dropdown } from 'react-bootstrap';
import "../../assets/styles/leaflet.css"
import { useDispatch, useSelector } from 'react-redux';
import { SearchAddressBar } from './searchAddressBar'


// YOUR_API_KEY_GOES_BELOW
const API_KEY = "web.nRDwOvUSAb8WPJZKaJUgdLnXK4MxFukGcw0TieG2";

export const Map = ({ setAddress, setItem, selectedItem, itemLocation, setItemLocation, setLocating, isFormSubmited }) => {

    const [dimStatus, setDimStatus] = useState(false)
    const [showAddressBar, setShowAddressbar] = useState(false);
    const [mapPropeties, setMapPropeties] = useState()
    const [alerts, setAlert] = useState({});
    const target = useRef();
    const ZOME_LEVEL = 13;
    const ZOME_LEVEL2 = 17;
    const dispatch = useDispatch()

    useEffect(() => {
        setAddress((prevState) => ({ ...prevState, lat: mapPropeties?.myMap.getCenter().lat, lng: mapPropeties?.myMap.getCenter().lng }))
    }, [isFormSubmited])

    let alertHandler = (txt, status, loader) => {
        setAlert({ text: txt, status: status, loader: loader })
    }

    mapPropeties?.myMap.on('drag', function (e) {
        mapPropeties.marker.setLatLng(e.target.getCenter());
    });
    mapPropeties?.myMap.on('move', function (e) {
        mapPropeties.marker.setLatLng(e.target.getCenter());
    })

    let locateUserHandler = () => {
        // Call mapPropeties.locate() for find Usre Location 
        mapPropeties.myMap?.locate();
        alertHandler("در حال دریافت موقعیت...", true, true);
        setLocating(true)

        // ON locationfound set Userlocate state of latlng result
        mapPropeties.myMap.on('locationfound', e => {

            alertHandler("موقعیت شما یافت شد", true, false);
            setLocating(false)
            setTimeout(() => {
                setAlert(null);
            }, 3000)

            setAddress((prevState) => ({ ...prevState, lat: e.latlng.lat, lng: e.latlng.lng }))
            mapPropeties.myMap.flyTo(e.latlng, 18)
            mapPropeties.marker.setLatLng(e.latlng);

        });

        // ON locationerror set Userlocate state of null
        mapPropeties.myMap?.on('locationerror', e => {
            alertHandler("خطا در دریافت موقعیت شما!", true, false);
            setLocating(false)
            setTimeout(() => {
                setAlert(null);
            }, 3000)
        });
    }
    useEffect(() => {
        setAddress((prevState) => ({ ...prevState, lat: mapPropeties?.myMap.getCenter().lat, lng: mapPropeties?.myMap.getCenter().lng }))
        setAddress((prevState) => ({ ...prevState, lat: itemLocation.lat, lng: itemLocation.lng }))
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

                    setMapPropeties({ myMap, marker })

                    // myMap.on('click', function (e) {
                    //     marker.setLatLng(e.latlng)
                    //     setAddress((prevState) => ({ ...prevState, lat: e.latlng.lat, lng: e.latlng.lng }))
                    // });
                }}
            />

            <div>
                <Button ref={target} className="btn btn-danger border-0  icon--location--detection" onClick={locateUserHandler}>
                    < img src={loctionicon} height="25px" alt="loction_icon" />
                </Button>
            </div>
            {/* <div className="w-100 tooltip--location--detection" style={{ display: alerts?.status ? "flex" : "none" }}>
                {
                    alerts?.loader ? <LoaderRed /> : null
                }
                {alerts?.text}
            </div> */}
            <SearchAddressBar show={showAddressBar} onHide={() => { setShowAddressbar(false) }} setItem={setItem} selectedItem={selectedItem} itemLocation={itemLocation} setItemLocation={setItemLocation} />
        </>
    )
}
