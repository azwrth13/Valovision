import { Card, Button } from 'antd'
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';


const ItemCard = ( {item, onDelete, onEdit }) => {
    // extremely bad way to do this, but refactor later...
    const isAgent = item.agentID !== undefined;
    const id = isAgent ? item.agentID : item.utilityID;
    const name = isAgent ? item.agentName : item.utilityName;
    const iconLink = isAgent ? item.agentPortraitLink : item.utilityIconLink;

    return (
        <Card 
            className = "item-card"
            title={name}
            actions={[
                <Button 
                  icon={<EditOutlined />} 
                  onClick={() => onEdit(item)} 
                  key="edit" 
                  type="text"
                />,
                <Button 
                  icon={<DeleteOutlined />} 
                  onClick={() => onDelete(id)} 
                  key="delete"
                  type="text"
                />
              ]}
        >
            <p><strong>ID: </strong>{id}</p>
            <img className = "item-image" src={iconLink} ></img>
        </Card>
    );
}

export default ItemCard;