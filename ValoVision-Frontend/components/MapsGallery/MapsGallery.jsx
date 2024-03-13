import React from "react";
import { Carousel } from "antd";
import MapCard from "./MapCard";
import UploadMap from "./UploadMap";

const mapData = [
  { title: "Ascent", src: "/assets/images/ascent.jpg" },
  { title: "Bind", src: "/assets/images/bind.jpg" },
  { title: "Fracture", src: "/assets/images/fracture.jpg" },
  { title: "Split", src: "/assets/images/haven.jpg" },
  { title: "Breeze", src: "/assets/images/breeze.jpg" },
];

const MapsGallery = () => (
  <>
    <Carousel>
      {mapData.map((map, index) => (
        <div key={index}>
          <MapCard title={map.title} src={map.src} />
        </div>
      ))}
    </Carousel>
    <UploadMap />
  </>
);

export default MapsGallery;
