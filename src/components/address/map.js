import React, { useState, useRef } from 'react';
import NeshanMap from 'react-neshan-map-leaflet'

import markericon from "../../assets/images/address/marker.svg";
import loctionicon from "../../assets/images/address/loction.svg";
import { Button } from 'react-bootstrap';
import "../../assets/styles/leaflet.css"


// YOUR_API_KEY_GOES_BELOW
const API_KEY = "web.nRDwOvUSAb8WPJZKaJUgdLnXK4MxFukGcw0TieG2";

export const Map = ({ setAddress }) => {

    const [position, setPosition] = useState({ lat: 36.297920, long: 59.605933 })
    const [mapPropeties, setMapPropeties] = useState()
    const [alerts, setAlert] = useState({});
    const target = useRef();
    const ZOME_LEVEL = 13;



    let alertHandler = (txt, status) => {
        setAlert({ text: txt, status: status })
    }

    let locateUserHandler = () => {
        // Call mapPropeties.locate() for find Usre Location 
        mapPropeties.myMap?.locate();
        alertHandler("در حال دریافت موقعیت...", true);

        // ON locationfound set Userlocate state of latlng result
        mapPropeties.myMap.on('locationfound', e => {

            alertHandler("موقعیت شما یافت شد", true);
            setTimeout(() => {
                setAlert(null);
            }, 2000)

            setAddress((prevState) => ({ ...prevState, lat: e.latlng.lat, long: e.latlng.lng }))
            mapPropeties.myMap.flyTo(e.latlng, ZOME_LEVEL)
            mapPropeties.marker.setLatLng(e.latlng);

        });

        // ON locationerror set Userlocate state of null
        mapPropeties.myMap?.on('locationerror', e => {
            alert(e.message);
            alertHandler("خطا در دریافت موقعیت شما!", true);
            setTimeout(() => {
                setAlert(null);
            }, 2000)
        });
    }



    return (
        <>
            <div className="map">



                <NeshanMap

                    options={{
                        key: API_KEY,
                        center: position,
                        maptype: 'dreamy',
                        zoom: ZOME_LEVEL
                    }}
                    onInit={(L, myMap) => {
                        let myIcon = L.icon({
                            iconUrl: markericon,
                            iconSize: [33, 45]
                        });
                        let marker = L.marker(position, { icon: myIcon })
                            .addTo(myMap);

                        setMapPropeties({ myMap, marker })

                        myMap.on('click', function (e) {
                            marker.setLatLng(e.latlng)
                            setAddress((prevState) => ({ ...prevState, lat: e.latlng.lat, long: e.latlng.lng }))

                        });
                    }}
                />

                <div>
                    <Button ref={target} className="btn btn-danger border-0  icon--location--detection" onClick={locateUserHandler}>
                        < img src={loctionicon} height="25px" alt="loction_icon" />
                    </Button>
                </div>

                <div className="tooltip--location--detection" style={{ transform: alerts?.status ? "translateX(0px)" : "translateX(30px)" }}>
                    {alerts?.text}
                </div>

            </div>

        </>
    )
}
