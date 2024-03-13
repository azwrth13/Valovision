import React from "react";
import { Image } from "antd";
import UpdateDelete from "./UpdateDeleteButton";
import "./styles.css";

// Adjust function signature to accept props
const MapCard = ({ title, src }) => (
  <div className="mc-container">
    <div className="map-card">
      {/* Use props for dynamic content */}
      <h2 className="card-title">{title}</h2>
      <Image width={450} src={src} />

      <UpdateDelete />
    </div>
  </div>
);

export default MapCard;
