import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";

import markericon from "../../assets/images/address/marker.svg";

const markerIcon = new L.Icon({
    iconUrl: markericon,
    iconSize: [33, 45]
});

export const Map = () => {

    const position = [36.288269, 59.615676];
    const [location, setLocation] = useState();
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
                    >
                    </Marker>
                </MapContainer>
            </div>

        </>
    )
}
