/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Company location coordinates
const companyLocation = {
  lat: 12.9141,
  lng: 77.6385,
};

const MapSection = () => {
    const mapStyle = {
        width: '590px',
        height: '500px',
      };
    
  return (
    <section>
      <div>
        <div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
