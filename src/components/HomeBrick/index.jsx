import React from 'react'
import { Typography, Image } from "antd";
// import "./index.css";

const { Title, Paragraph } = Typography;

export default function HomeBrick(props) {
    const {imgSrc, title, paragraph} = props;

    return (
        <div /*className="homeb"*/ style={{ textAlign: "center", width: "300px", height: "300px", padding: "42px 24px", backgroundColor: "rgb(252,253,255)", borderRadius:"12px"}}>
            <Image
                src={ imgSrc }
                preview={ false }
                width="64px"
            />
            <Typography>
                <Title style={{fontSize:"x-large"}}>{ title }</Title>
                <Paragraph style={{fontSize:"small",fontFamily:"微软雅黑",color:"#9e9e9e"}}>{ paragraph }</Paragraph>
            </Typography>
        </div>
    )
}
