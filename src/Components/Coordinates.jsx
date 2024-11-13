import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIconX2 from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIconX2,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const Coordinates = () => {

    return (
        <MapContainer center={[59.266429019428614, 15.225847951251273]} zoom={14} style={{ height: '540px', width: '636px' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreeetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[59.266429019428614, 15.225847951251273]}>
                <Popup>Medical Center 1</Popup>
            </Marker>
            <Marker position={[59.26590028244992, 15.202568718798291]}>
                <Popup>Medical Center 2</Popup>
            </Marker>
        </MapContainer>
    )

}
export default Coordinates