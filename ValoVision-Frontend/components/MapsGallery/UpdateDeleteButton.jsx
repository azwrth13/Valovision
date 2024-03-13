import React from "react";
import { Button, Flex } from "antd";
import "./styles.css";

const UpdateDelete = () => {
  return (
    <div className="button-container">
      <Button type="primary"> Update </Button>
      <Button type="primary"> Delete </Button>
    </div>
  );
};

export default UpdateDelete;
