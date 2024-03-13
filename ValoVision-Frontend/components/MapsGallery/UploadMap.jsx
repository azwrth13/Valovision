import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

const UploadMap = () => {
  return (
    <div className="upload-outline">
      <Button icon={<UploadOutlined />}>Upload a new map!</Button>
    </div>
  );
};

export default UploadMap;
