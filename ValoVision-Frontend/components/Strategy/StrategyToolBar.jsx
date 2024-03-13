import { Select, Button } from "antd";
import "./styles.css";

const StrategyToolBar = ({ onMapChange, onClearMarkers, onUndoLastMarker, defaultMap }) => {
    return (
      <div className="strategy-toolbar">
        <Select
          defaultValue={defaultMap}
          onChange={onMapChange}
          options={[
            { value: "ascent.jpg", label: "Ascent" },
            { value: "bind.jpg", label: "Bind" },
            { value: "haven.jpg", label: "Haven" },
          ]}
        />
        <Button onClick={onClearMarkers}>Clear</Button>
        <Button onClick={onUndoLastMarker}>Undo</Button>
      </div>
    );
  };

export default StrategyToolBar;