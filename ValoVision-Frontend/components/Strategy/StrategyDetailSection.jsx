import { Input } from 'antd';
import './styles.css'

const StrategyDetailSection = ({ strategyTitle, setStrategyTitle, strategyDescription, setStrategyDescription }) => {
    return (
        <div className="strategy-detail-container">
            <Input
                placeholder="Enter strategy title..."
                value={strategyTitle}
                onChange={(e) => setStrategyTitle(e.target.value)}
            />
            <Input.TextArea
                placeholder="Describe the strategy..."
                value={strategyDescription}
                onChange={(e) => setStrategyDescription(e.target.value)}
                autoSize={{ minRows: 3, maxRows: 6 }}
            />
        </div>
    );
};
  
  export default StrategyDetailSection;