'use client';

import strategiesData from '@/components/Strategies/data';
import { Image } from 'antd';
import './styles.css';

const StrategyDetail = ({ params }) => {
  const { strategyId } = params;

  const strategy = strategiesData.find(s => s.id === parseInt(strategyId, 10));

  if (!strategy) {
    return <p>Strategy not found.</p>;
  }

  return (
    <div className='strategy-detail-container'>
      <h1>{strategy.title}</h1>
      <h2>{strategy.map}</h2>
      <Image width = {350} src={`/${strategy.strategyImageLink}`}/>
      <p>{strategy.description}</p>
    </div>
  );
}

export default StrategyDetail;