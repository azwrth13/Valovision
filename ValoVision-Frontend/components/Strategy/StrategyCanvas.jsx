"use client";

import { useRef, useEffect } from "react";
import "./styles.css";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const StrategyCanvas = ({ currentMap, markers, onAddMarker, currentMarker }) => {
  const canvasRef = useRef(null);

  const canvasWidth = 800;
  const canvasHeight = 600;

  const linkName = "strategy-plan";

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const mapImage = new Image();

    mapImage.onload = () => {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      context.drawImage(mapImage, 0, 0, canvasWidth, canvasHeight);
      markers.forEach((marker) => {
        if (marker.icon) {
          placeAgentMarker(context, marker.x, marker.y, marker.icon);
        } else {
          placeRedDotMarker(context, marker.x, marker.y);
        }
      });
    };

    mapImage.src = `/assets/images/${currentMap}`;
  }, [markers, currentMap]);

  const placeAgentMarker = (context, x, y, icon) => {
    const agentImage = new Image();
    const iconSize = 30;

    agentImage.onload = () => {
      context.drawImage(agentImage, x - iconSize / 2, y - iconSize / 2, iconSize, iconSize);
  };

  agentImage.src = icon;
  };

  const placeRedDotMarker = (context, x, y) => {
    context.fillStyle = "red";
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2);
    context.fill();
  };

  const handleClick = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    onAddMarker(x, y, currentMarker.icon);
  };


  const saveCanvasAsImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = linkName;
      link.href = image;
      link.click();
    }
  };

  return (
    <>
      <canvas className="strategy-canvas" ref={canvasRef} onClick={handleClick} />
      <Button 
        icon={<DownloadOutlined />} 
        onClick={saveCanvasAsImage} 
      >
        Save Image
      </Button>
    </>
  );

}

export default StrategyCanvas;
