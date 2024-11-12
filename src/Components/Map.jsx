import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainer = {
    width: '636px',
    height: '540px'
};

const center = {
    lat: 59.266429019428614, //Pil till Örebro Hockey
    lng: 15.225847951251273

};

const offcenter = {
    lat:59.26590028244992,
    lng:15.202568718798291

};

const Map = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyBfdO_UYz5oRDkNokb6peAlsINNuztdpvw">
            <GoogleMap mapContainerStyle={mapContainer}
            center={center}
            zoom={14}>
                <Marker position={center} />
                <Marker position={offcenter} />
            </GoogleMap>
        </LoadScript>
    )
}
export default Map