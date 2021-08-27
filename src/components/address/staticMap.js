import React, { useEffect, useState } from 'react'
import NeshanMap from 'react-neshan-map-leaflet'
import markericon from "../../assets/images/address/marker.svg";

const API_KEY = "web.nRDwOvUSAb8WPJZKaJUgdLnXK4MxFukGcw0TieG2";



export const StaticMap = ({ address }) => {

    const [mapPropeties, setMapPropeties] = useState()
    const [itemLocation, setItemLocation] = useState({ lat: 36.297920, lng: 59.605933 })

    const ZOME_LEVEL = 16;

    useEffect(() => {
        if (address.lat && address.lng) {
            let myIcon = mapPropeties?.L.icon({
                iconUrl: markericon,
                iconSize: [50, 65],
                zIndexOffset: 1000
            });
            let marker = mapPropeties?.L.marker({ lat: address.lat, lng: address.lng }, { icon: myIcon }).addTo(mapPropeties?.myMap);
            mapPropeties?.myMap.setView({ lat: address.lat, lng: address.lng })
        }
    }, [address])

    return (
        <>
            <NeshanMap
                options={{
                    key: API_KEY,
                    center: itemLocation,
                    maptype: 'dreamy-gold',
                    zoom: ZOME_LEVEL
                }}
                onInit={(L, myMap) => {

                    setMapPropeties({ L, myMap })
                    myMap.dragging.disable()
                    myMap.doubleClickZoom.disable()



                }}
            />

        </>
    )
}