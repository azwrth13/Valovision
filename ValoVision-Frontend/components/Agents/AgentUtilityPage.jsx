"use client";

import { useState, useEffect } from "react";
import { Tabs, Button, Drawer, Form, Input, Upload } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import "./styles.css";
import ItemCard from "./ItemCard";
import useAgentsStore from "@/stores/agentsStore";
import AddAgentDrawer from "./AddAgentDrawer";
import EditAgentDrawer from "./EditAgentDrawer";


const AgentUtilityPage = () => {
  const {
    agents,
    loading,
    error,
    fetchAgents,
    addAgent,
    updateAgent,
    deleteAgent,
  } = useAgentsStore();


  const [activeTab, setActiveTab] = useState("1");

  const [formAgentCreate] = Form.useForm();
  const [formUtility] = Form.useForm();

  const [isEditDrawerVisible, setIsEditDrawerVisible] = useState(false);
  const [currentAgent, setCurrentAgent] = useState(null);

  const onFinishAddingAgent= async (values) => {
    const isDuplicate = agents.some(
      (agent) => agent.agentName === values.agentName
    );

    if (isDuplicate) {
      // Inform the user about the duplicate entry
      alert("An agent with this name already exists.");
      return; // Prevent form submission
    }

    const agentData = {
      agentName: values.agentName,
      agentPortraitLink: values.agentPortraitLink,
    };

    try {
      await addAgent(agentData);
      onClose();
      formAgentCreate.resetFields();
      fetchAgents();
    } catch (error) {
      console.error("Failed to add agent: ", error);
    }
  };
  const onUtilityFormFinish = () => {};
  const handleDeleteAgent = async (agentID) => {
    try {
      await deleteAgent(agentID);
      fetchAgents();
    } catch (error) {
      console.error("Failed to delete agent: ", error);
    }
  };

  const handleEditAgent = (agent) => {
    setCurrentAgent(agent);
    setIsEditDrawerVisible(true);
  };

  const onFinishEditingAgent = async (values) => {
    const isDuplicate = agents.some(
      (agent) => agent.agentName === values.agentName
    );

    if (isDuplicate) {
      // Inform the user about the duplicate entry
      alert("An agent with this name already exists.");
      return; // Prevent form submission
    }

    try {
      await updateAgent(currentAgent.agentID, values);
      setIsEditDrawerVisible(false);
      fetchAgents();
    } catch (error) {
      console.error("Failed to update agent:", error);
    }
  };

  const [isAddAgentDrawerVisible, setIsAddAgentDrawerVisible] = useState(false);
  const [isUtilityDrawerVisible, setIsUtilityDrawerVisible] = useState(false);

  const showAddAgentDrawer = () => {
    setIsAddAgentDrawerVisible(true);
  };

  const showUtilityDrawer = () => {
    setIsUtilityDrawerVisible(true);
  };

  const onClose = () => {
    setIsAddAgentDrawerVisible(false);
    setIsUtilityDrawerVisible(false);
  };

  const onTabChange = (key) => {
    setActiveTab(key);
  };

  const utilities = [
    {
      utilityID: 1,
      utilityName: "Smoke",
      utilityIconLink: "/assets/icons/utilities/smoke.jpg",
    },
    {
      utilityID: 2,
      utilityName: "Flash",
      utilityIconLink: "/assets/icons/utilities/flash.jpg",
    },
    {
      utilityID: 3,
      utilityName: "Barrier",
      utilityIconLink: "/assets/icons/utilities/barrier.jpg",
    },
  ];

  useEffect(() => {
    // Fetch once when this component renders
    fetchAgents();
  }, []);

  const tabsItems = [
    {
      key: "1",
      label: (
        <span>
          <UserOutlined />
          Agents
        </span>
      ),
      children: (
        <div className="content">
          {agents.map((agent) => (
            <ItemCard
              key={`agent-${agent.agentID}`}
              item={agent}
              onDelete={handleDeleteAgent}
              onEdit={handleEditAgent}
            />
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <span>
          <RocketOutlined />
          Utilities
        </span>
      ),
      children: (
        <div className="content">
          {utilities.map((utility) => (
            <ItemCard
              key={`utility-${utility.utilityID}`}
              item={utility}
              onDelete={() => console.log()}
              onEdit={() => console.log()}
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="agent-utility-container">
      <Tabs defaultActiveKey="1" items={tabsItems} onChange={onTabChange} />
      <div className="add-new-button-container">
        {activeTab === "1" && (
          <Button type="primary" onClick={showAddAgentDrawer}>
            Add New Agent
          </Button>
        )}
        {activeTab === "2" && (
          <Button type="primary" onClick={showUtilityDrawer}>
            Add New Utility
          </Button>
        )}
      </div>
        
      {/* Add Agent Drawer */}
      <AddAgentDrawer
        isVisible={isAddAgentDrawerVisible}
        onClose={() => setIsAddAgentDrawerVisible(false)}
        onFinishAddingAgent={onFinishAddingAgent}
      />

      {/* Edit Agent Drawer */}
      <EditAgentDrawer
        isVisible={isEditDrawerVisible}
        onClose={() => setIsEditDrawerVisible(false)}
        currentAgent={currentAgent}
        onFinishEditingAgent={onFinishEditingAgent}
      />

      {/* Create Utility Drawer  */}
      <Drawer
        title="Add a new utility"
        onClose={onClose}
        open={isUtilityDrawerVisible}
      >
        <Form
          form={formUtility}
          layout="vertical"
          onFinish={onUtilityFormFinish}
        >
          <Form.Item
            name="utilityName"
            label="Name"
            rules={[
              { required: true, message: "Please enter a utility name!" },
            ]}
          >
            <Input placeholder="Enter utility name" />
          </Form.Item>
          <Form.Item
            name="utilityIconLink"
            label="Utility Icon"
            valuePropName="fileList"
            getValueFromEvent={(e) => console.log(e)}
            extra="Upload utility icon"
          >
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default AgentUtilityPage;
