'use client';

import './styles.css';
import { FloatButton, Modal } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';

const FloatingButton = ({ title }) => {
    
    const showModalInfo = () => {
        Modal.info({
          title: title,
          content: (
            <div className="modal-content">
                <h2>Getting Started</h2>
                <p>
                  <strong>Select a Map: </strong>
                  Start by choosing a map for your strategy.
                </p>

                <p>
                  <strong>Place and Choose Agents: </strong>
                  Place agent markers by clicking on an agent icon. The blank icon lets you draw
                  red dots (enemies).
                </p>

                <p>
                  <strong>Modify Markers: </strong>
                  Use &quot;Undo&quot; to revert your last action or &quot;Clear&quot; to remove all markers.
                </p>

                <p>
                  <strong>Save and Share: </strong>
                  Save your strategy for later or share it with your team using the provided saving options.
                </p>

                <p>
                  <strong>Tips: </strong>
                  Utilize zoom for detail, and annotatate your strategy.
                  Support is available for any help needed. Feel free to contact us!
                </p>
            </div>
          ),
          onOk() {}, width: "600px",
        });
    };

    return (
        <FloatButton
          className = "floating-btn"
          icon={<InfoCircleOutlined />}
          type="primary"
          onClick={showModalInfo}
          style={{
              right: 50,
              bottom: 40,
          }}
        />
    );
};

export default FloatingButton;