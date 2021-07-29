import React, { useState, useRef, useMemo } from 'react';
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";

import markericon from "../../assets/images/address/marker.svg";

const markerIcon = new L.Icon({
    iconUrl: markericon,
    iconSize: [33, 45]
});

export const Map = ({ setAddress }) => {

    const [position, setPosition] = useState({ lat: 36.29658807406395, lng: 59.60598574310335 })
    const markerRef = useRef()
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                    setAddress((prevState) => ({ ...prevState, lat: marker.getLatLng().lat, lng: marker.getLatLng().lng }))
                }
            }
        }), [],
    )

    return (
        <>
            <div className="map">
                <MapContainer center={position} zoom={13} scrollWheelZoom={true} >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        draggable={true}
                        position={position}
                        icon={markerIcon}
                        ref={markerRef}
                        eventHandlers={eventHandlers}
                    >
                    </Marker>
                </MapContainer>
            </div>

        </>
    )
}
