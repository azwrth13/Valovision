'use client';

import { useState } from 'react';
import { Avatar, Space } from 'antd';

const AgentUtilitySelector = () => {
    

    const utilities = [
        { name: 'Smoke', icon: '/assets/utilities/smoke.jpg'},
        { name: 'Flash', icon: '/assets/utilities/flash.jpg'},
        { name: 'Barrier', icon: '/assets/utilities/barrier.jpg'},
    ];

    const handleUtilityClick = (utility) => {
        setSelectedUtility(utility.name);
        onUtilitySelect(utility);
    }

    return (
        <Space>
            {utilities.map((utility) => (
                <Avatar
                    className={`utility-select ${selectedUtility === utility.name ? 'utility-icon-selected' : ''}`}
                    key={utility.name}
                    src={utility.icon}
                    size="large"
                    onClick={() => handleUtilityClick(utility)}
                />
            ))}
        </Space>
    );
};

export default AgentUtilitySelector;