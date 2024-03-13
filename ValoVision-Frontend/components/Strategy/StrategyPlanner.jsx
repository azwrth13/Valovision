"use client";

import { useState } from 'react';
import { Button } from 'antd';
import StrategyToolBar from './StrategyToolBar';
import StrategyCanvas from './StrategyCanvas';
import AgentSelector from './AgentSelector';
import StrategyDetailSection from './StrategyDetailSection';
import "./styles.css";

const StrategyPlanner = () => {
    const [currentMap, setCurrentMap] = useState("ascent.jpg");
    const [markers, setMarkers] = useState([]);
    const [currentMarker, setCurrentMarker] = useState({ name: 'Jett', icon: '/assets/icons/jett.jpg' });

    const [strategyTitle, setStrategyTitle] = useState('');
    const [strategyDescription, setStrategyDescription] = useState('');

    const handleSelectMap = (value) => {
        clearMarkers();
        setCurrentMap(value);
    };

    const handleMarkerSelection = (selection) => {
        setCurrentMarker(selection);
    };

    const addMarker = (x, y, icon) => {
        setMarkers((prev) => [...prev, { x, y, icon }]);
    };

    const clearMarkers = () => {
        setMarkers([]);
    };

    const undoLastMarker = () => {
        setMarkers((markers) => markers.slice(0, markers.length - 1));
    };

    const handleSaveStrategy = async () => {
        // We also need to send the strategyImage as well (need to think about how to structure)
        const strategyData = {
            strategyTitle,
            strategyDescription,
            mapID: currentMap,
            markers,
        };
        console.log("Submitting strategy...", strategyData);
    };

    return (
        <div className="strategy-tools">
            <StrategyToolBar
                onMapChange={handleSelectMap}
                onClearMarkers={clearMarkers}
                onUndoLastMarker={undoLastMarker}
                defaultMap="Ascent" />
            <AgentSelector onSelection={handleMarkerSelection}
            />

            <div className="strategy-planner">
                <StrategyCanvas
                    currentMap={currentMap}
                    markers={markers}
                    onAddMarker={addMarker}
                    currentMarker={currentMarker}
                />
            </div>

            <StrategyDetailSection
                strategyTitle={strategyTitle}
                setStrategyTitle={setStrategyTitle}
                strategyDescription={strategyDescription}
                setStrategyDescription={setStrategyDescription}
            />

            <Button type="primary" onClick={handleSaveStrategy} style={{ marginTop: '16px' }}>
                Save Strategy
            </Button>
        </div>
    )
};

export default StrategyPlanner;