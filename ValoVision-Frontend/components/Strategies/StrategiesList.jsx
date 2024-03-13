'use client';
import Link from 'next/link';
import strategiesData from './data';
import { List, Avatar } from 'antd';
import './styles.css';

const StrategiesList = () => {
    return (
        <div className="strategies-list">
            <List
            itemLayout="vertical"
            dataSource={strategiesData}
            renderItem={strategy => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={strategy.strategyImageLink} />}
                            title={
                                <Link href={`/strategies/${strategy.id}`}>
                                  {`${strategy.map} - ${strategy.title}`}
                                </Link>
                            }
                            description={<span className="description-text">{strategy.description}</span>}
                        />
                    </List.Item>
            )}
            />
        </div>
    );
};

export default StrategiesList;