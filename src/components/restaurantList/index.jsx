import React from 'react';
import { List, Avatar } from 'antd';

export default function RestaurantList({dataList}){

    console.log(dataList);
    
    return(
        <>
            <List
                itemLayout="horizontal"
                dataSource={dataList}
                renderItem={item => (
                    <List.Item style={{ paddingLeft : '8px' }} >
                        <List.Item.Meta
                            avatar={<Avatar shape="square" src={item.image} />}
                            title={item.name}
                        />
                    </List.Item>
                )}
            />
        </>
    )
}