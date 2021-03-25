import { Card, Image } from 'antd'
import React from 'react'

export default function ClassItem(props) {
    const cover = (
        <Image
            preview={false}
            src="https://assets.ketangpai.com/theme/min/12.jpg"
            />
    );
    return (
        <Card 
            style={{ width: "300px" }}
            cover={cover}
            >
                啥
        </Card>
    )
}
