import React from 'react'
import { Typography, Image } from "antd";

const { Title, Paragraph } = Typography;

export default function HomeBrick(props) {
    const {imgSrc, title, paragraph} = props;

    return (
        <div style={{ textAlign: "center", width: "288px", height: "320px", padding: "42px 24px", backgroundColor: "rgb(252,253,255)" }}>
            <Image
                src={ imgSrc }
                preview={ false }
                width="64px"
            />
            <Typography>
                <Title>{ title }</Title>
                <Paragraph>{ paragraph }</Paragraph>
            </Typography>
        </div>
    )
}
